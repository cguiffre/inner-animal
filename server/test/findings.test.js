'use strict';
// Guards for Secret Shopper findings IA-V2, IA-C1 and IA-R2.
const test = require('node:test');
const assert = require('node:assert');
const path = require('node:path');

const ROOT = path.resolve(__dirname, '..', '..');
const { ANIMALS } = require(path.join(ROOT, 'animal_data.js'));
const QL = require(path.join(ROOT, 'quiz_logic.js'));
globalThis.ANIMALS = ANIMALS;
const { TRIADS, LANE_TRIADS, simulate, questionTotal, rarityBucket } = QL;

test('IA-V2: the question count shown before the lane pick is the count every lane finishes with', () => {
  const base = TRIADS.length;
  for (const lane of Object.keys(LANE_TRIADS)) {
    assert.strictEqual(questionTotal(), base + LANE_TRIADS[lane].length, lane);
  }
});

test('IA-C1: every rarity lane maps to one of the four Zoo tier names', () => {
  assert.deepStrictEqual(
    ['common', 'less_common', 'unusual', 'bizarre'].map(rarityBucket),
    ['Common', 'Uncommon', 'Unique', 'Bizarre']);
});

test('IA-R2: the shadow is never also a near match, and its % is its own score', () => {
  const runs = [];
  for (const lane of ['land', 'air', 'water'])
    for (const slider of [0, 25, 50, 75, 100])
      for (let c = 0; c < 3; c++) {
        const choice = {};
        [...TRIADS, ...LANE_TRIADS[lane]].forEach(q => { choice[q.id] = c === 2 ? q.options.length - 1 : c; });
        runs.push(simulate(choice, slider, lane));
      }
  for (const r of runs) {
    if (!r.shadow) continue;
    assert.notStrictEqual(r.shadow.id, r.top.id);
    assert.ok(!r.alternates.some(a => a.id === r.shadow.id), `${r.shadow.name} is both near match and shadow`);
    assert.ok(r.shadow.confidence <= r.top.confidence, `${r.shadow.name} outscores the top match`);
  }
});
