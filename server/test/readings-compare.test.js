'use strict';
// Guards for Secret Shopper calls IA-R1 (a reading per animal) and IA-M1 (compare-by-link).
const test = require('node:test');
const assert = require('node:assert');
const path = require('node:path');

const ROOT = path.resolve(__dirname, '..', '..');
const { ANIMALS } = require(path.join(ROOT, 'animal_data.js'));
const { READINGS } = require(path.join(ROOT, 'animal_readings.js'));
globalThis.ANIMALS = ANIMALS;
const { compareLink, readCompareLink } = require(path.join(ROOT, 'quiz_logic.js'));

test('IA-R1: every animal has a 2-3 sentence reading, and no extras', () => {
  const ids = ANIMALS.map(a => a.id);
  assert.strictEqual(ids.length, 130);
  for (const id of ids) {
    const r = READINGS[id];
    assert.ok(typeof r === 'string' && r.length > 60, `${id} has no reading`);
    const sentences = r.split(/(?<=[.!?])\s+/).length;
    assert.ok(sentences >= 2 && sentences <= 3, `${id}: ${sentences} sentences`);
    assert.ok(!/[<>]/.test(r), `${id} contains markup`);
  }
  assert.deepStrictEqual(Object.keys(READINGS).sort(), [...ids].sort());
});

test('IA-R1: no two readings open the same way', () => {
  const seen = new Map();
  for (const [id, r] of Object.entries(READINGS)) {
    const open = r.split(/\s+/).slice(0, 3).join(' ').toLowerCase();
    assert.ok(!seen.has(open), `${id} and ${seen.get(open)} both open "${open}"`);
    seen.set(open, id);
  }
});

test('IA-M1: a compare link round-trips', () => {
  const q = compareLink('red_fox', 0.874);
  assert.strictEqual(q, '?vs=red_fox&m=87');
  const got = readCompareLink(q, ANIMALS);
  assert.strictEqual(got.status, 'ok');
  assert.strictEqual(got.animal.id, 'red_fox');
  assert.strictEqual(got.pct, 87);
});

test('IA-M1: no vs param means no compare', () => {
  assert.strictEqual(readCompareLink('', ANIMALS).status, 'none');
  assert.strictEqual(readCompareLink('?utm=x', ANIMALS).status, 'none');
});

test('IA-M1: tampered or unknown links are rejected, never passed through', () => {
  const bad = [
    '?vs=dragon&m=50',                 // unknown animal
    '?vs=__proto__&m=50',              // prototype key
    '?vs=constructor&m=50',
    '?vs=<img src=x onerror=alert(1)>&m=50',
    '?vs=red_fox&m=101',               // out of range
    '?vs=red_fox&m=-1',
    '?vs=red_fox&m=5e1',
    '?vs=red_fox&m=50%3Cb%3E',
    '?vs=red_fox',                     // missing match
    '?vs=red_fox&m=',
    '?vs=red_fox&vs=raccoon&m=50',     // duplicated param
    '?vs=' + 'a'.repeat(500) + '&m=50',
  ];
  for (const q of bad) assert.strictEqual(readCompareLink(q, ANIMALS).status, 'bad', q);
});
