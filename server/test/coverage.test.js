'use strict';
// Coverage guard for the Inner Animal matcher: proves every one of the 130
// animals can surface as a top result, and that no dead quiz tokens or
// unmatched-signature penalties remain.
const test = require('node:test');
const assert = require('node:assert');
const path = require('node:path');

const ROOT = path.resolve(__dirname, '..', '..');
const { ANIMALS } = require(path.join(ROOT, 'animal_data.js'));
const QL = require(path.join(ROOT, 'quiz_logic.js'));

// computeShortlist resolves the roster from globalThis.ANIMALS in Node.
globalThis.ANIMALS = ANIMALS;

const {
  TRIADS, LANE_TRIADS, REACHABLE_TOKENS,
  getRealm, rarityBias, normalize, facetOverlapRatio,
  computeShortlist, accumulateAnswers, simulate,
} = QL;

const ALL_IDS = ANIMALS.map(a => a.id);
const REALMS = ['land', 'air', 'water'];
const stageA = TRIADS.filter(t => t.stage === 'A');
const baseB = TRIADS.filter(t => t.stage === 'B');

// Deterministic PRNG so every run is reproducible.
function mulberry32(seed) {
  return function () {
    seed |= 0; seed = (seed + 0x6D2B79F5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

// -------------------------------------------------------------------------
test('no dead quiz tokens: every trait_boosts token exists on >=1 animal', () => {
  const onAnimals = new Set();
  ANIMALS.forEach(a => Object.values(a.traits).flat().forEach(t => onAnimals.add(t)));
  const dead = [...REACHABLE_TOKENS].filter(t => !onAnimals.has(t)).sort();
  assert.deepStrictEqual(dead, [], `Dead quiz tokens (emitted by options, on 0 animals): ${dead.join(', ')}`);
});

// -------------------------------------------------------------------------
test('unmatched signatures never penalize: extra unreachable signature leaves score unchanged', () => {
  const saved = globalThis.ANIMALS;
  try {
    for (const a of ANIMALS) {
      const own = [...new Set(Object.values(a.traits).flat().filter(t => REACHABLE_TOKENS.has(t)))];
      const userTraits = {}; own.forEach(t => userTraits[t] = 1);
      const userFacets = {};
      for (const [k, v] of Object.entries(a.facets)) userFacets[k] = new Set(v);

      const base = JSON.parse(JSON.stringify(a));
      const mod = JSON.parse(JSON.stringify(a));
      mod.traits.signature = [...mod.traits.signature, '__unreachable_flavor__'];

      globalThis.ANIMALS = [base];
      const s1 = computeShortlist(userTraits, userFacets, 50, null).top_score;
      globalThis.ANIMALS = [mod];
      const s2 = computeShortlist(userTraits, userFacets, 50, null).top_score;

      assert.ok(Math.abs(s1 - s2) < 1e-12,
        `${a.id}: adding an unreachable signature changed score ${s1} -> ${s2}`);
    }
  } finally {
    globalThis.ANIMALS = saved;
  }
});

// -------------------------------------------------------------------------
// Reachability: for each animal, search realistic playthroughs (greedy start +
// Monte-Carlo random restarts + coordinate ascent) for one that makes it the
// top result. This is the rigorous proof that every animal CAN surface.
test('every one of the 130 animals is reachable by a realistic playthrough', () => {
  // Precompute each animal's trait vector + reachable-magnitude once.
  const PC = new Map();
  for (const x of ANIMALS) {
    const v = {};
    [...(x.traits.temperament || []), ...(x.traits.work_style || [])].forEach(t => v[t] = 1);
    (x.traits.signature || []).forEach(t => v[t] = 2);
    let mag = 0;
    for (const k in v) if (REACHABLE_TOKENS.has(k)) mag += v[k] * v[k];
    PC.set(x.id, { v, mag: Math.sqrt(mag) || 1, realm: getRealm(x) });
  }
  const POOL = { land: [], air: [], water: [] };
  ANIMALS.forEach(x => POOL[PC.get(x.id).realm].push(x));
  // Candidate sliders per lane (each rarity tier peaks in its own slider band).
  const LANE_SLIDERS = {
    common: [0, 8, 17], less_common: [25, 33, 42],
    unusual: [58, 67, 75], bizarre: [83, 92, 100],
  };
  const scoreOf = (x, uv, uf, s) => {
    const pc = PC.get(x.id);
    let dot = 0; for (const k in pc.v) dot += pc.v[k] * (uv[k] || 0);
    return (0.6 * (dot / pc.mag) + 0.4 * facetOverlapRatio(uf, x)) * rarityBias(x.rarity_lane, s);
  };
  const marginOf = (A, pool, sliders, chosenOpts) => {
    const { userTraits, userFacets } = accumulateAnswers(chosenOpts);
    const uv = normalize(userTraits);
    let best = -Infinity;
    for (const s of sliders) {
      let sA = -Infinity, sMax = -Infinity;
      for (const x of pool) {
        const v = scoreOf(x, uv, userFacets, s);
        if (x.id === A.id) sA = v; else if (v > sMax) sMax = v;
      }
      if (sA - sMax > best) best = sA - sMax;
    }
    return best;
  };
  const greedyInit = (A, qs) => {
    const focus = new Set(Object.values(A.traits).flat().filter(t => REACHABLE_TOKENS.has(t)));
    const ff = A.facets;
    const ch = {};
    for (const q of qs) {
      let best = -1, bi = 0;
      q.options.forEach((o, idx) => {
        let s = 0;
        const tb = o.trait_boosts || {};
        for (const k in tb) tb[k].forEach(t => { if (focus.has(t)) s += 2; });
        const fb = o.facet_boosts || {};
        for (const k in fb) fb[k].forEach(val => { if ((ff[k] || []).includes(val)) s += 1.5; });
        if (s > best) { best = s; bi = idx; }
      });
      ch[q.id] = bi;
    }
    return ch;
  };
  const rnd = mulberry32(20260719);
  const ri = n => Math.floor(rnd() * n);

  const reachable = (A) => {
    const realm = PC.get(A.id).realm;
    const qs = [...stageA, ...baseB, ...(LANE_TRIADS[realm] || [])];
    const pool = POOL[realm];
    const sliders = LANE_SLIDERS[A.rarity_lane] || [50];
    const optsOf = (ch) => qs.map(q => q.options[ch[q.id]]);
    const inits = [
      greedyInit(A, qs),
      Object.fromEntries(qs.map(q => [q.id, ri(q.options.length)])),
      Object.fromEntries(qs.map(q => [q.id, ri(q.options.length)])),
    ];
    for (const init of inits) {
      const ch = { ...init };
      for (let pass = 0; pass < 5; pass++) {
        let improved = false;
        for (const q of qs) {
          let bi = ch[q.id], bm = marginOf(A, pool, sliders, optsOf(ch));
          for (let i = 0; i < q.options.length; i++) {
            if (i === ch[q.id]) continue;
            const old = ch[q.id]; ch[q.id] = i;
            const m = marginOf(A, pool, sliders, optsOf(ch));
            if (m > bm) { bm = m; bi = i; improved = true; }
            ch[q.id] = old;
          }
          ch[q.id] = bi;
        }
        if (marginOf(A, pool, sliders, optsOf(ch)) > 0) return true;
        if (!improved) break;
      }
    }
    return false;
  };

  const unreachable = ANIMALS.filter(A => !reachable(A)).map(a => `${a.id}/${a.rarity_lane}`);
  assert.deepStrictEqual(unreachable, [],
    `${unreachable.length} animal(s) unreachable by any realistic playthrough: ${unreachable.join(', ')}`);
});

// -------------------------------------------------------------------------
// Natural-play coverage: 50k uniform-random playthroughs. Uniform random noise
// models an "incoherent" user and, because of the rarity tiers, will not
// surface every rare animal (full reachability is proven by the test above),
// but it must surface the large majority. Seeded => deterministic.
test('Monte-Carlo: 50k random playthroughs surface the large majority of animals', () => {
  const N = 50000;
  const rnd = mulberry32(12345);
  const ri = n => Math.floor(rnd() * n);
  const winners = new Set();
  for (let i = 0; i < N; i++) {
    const lanePick = REALMS[ri(REALMS.length)];
    const questions = [...stageA, ...baseB, ...(LANE_TRIADS[lanePick] || [])];
    const choices = {};
    for (const q of questions) choices[q.id] = ri(q.options.length);
    const res = simulate(choices, ri(101), lanePick);
    if (res && res.top && res.top.id) winners.add(res.top.id);
  }
  assert.ok(winners.size >= 115,
    `Random play surfaced only ${winners.size}/130 distinct winners (expected >= 115).`);
});

// -------------------------------------------------------------------------
test('accumulateAnswers merges trait counts and facet sets', () => {
  const opts = [
    { trait_boosts: { temperament: ['bold'], signature: ['speed'] }, facet_boosts: { biome: ['forest'] } },
    { trait_boosts: { temperament: ['bold'] }, facet_boosts: { biome: ['urban'], locomotion: ['flyer'] } },
  ];
  const { userTraits, userFacets } = accumulateAnswers(opts);
  assert.strictEqual(userTraits.bold, 2);
  assert.strictEqual(userTraits.speed, 1);
  assert.deepStrictEqual([...userFacets.biome].sort(), ['forest', 'urban']);
  assert.deepStrictEqual([...userFacets.locomotion], ['flyer']);
});
