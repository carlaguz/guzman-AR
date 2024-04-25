import { assert }  from 'chai';
import { describe, it } from 'mocha';
import { cubo, cuadrado } from '../src/module.js';

describe('Evaluacion de la funcion cubo', () => {
  it('Cubo 3 * 3 * 3', () => {
    assert.equal(cubo(3), 27)
  });
});

describe('Evaluacion de la funcion cuadrado', () => {
  it('Cuadrado 2 * 2', () => {
    assert.equal(cuadrado(2), 4)
  });
});