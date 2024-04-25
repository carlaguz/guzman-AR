import assert from 'node:assert';
import test from 'node:test';
import { cubo } from '../src/module.js'

test('Cubo 3 * 3 * 3', () => {
  assert.strictEqual(cubo(3,3,3), 27)
});