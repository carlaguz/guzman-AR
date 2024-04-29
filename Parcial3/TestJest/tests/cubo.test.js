const cubo = require('../src/module.js')

test('Cubo 3 * 3 * 3 = 27', () => {
  let res = cubo.cubo(3,3,3);
  expect(res).toBe(27);
});