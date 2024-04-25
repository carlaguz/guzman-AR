import * as chai from 'chai';
import test from 'node:test';
import { cubo } from '../src/module.js';

test('Cubo 3 * 3 * 3', () => {
  chai.assert.equal(cubo(3,3,3), 27)
});