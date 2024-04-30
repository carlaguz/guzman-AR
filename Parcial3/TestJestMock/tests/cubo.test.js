const cubo = require('../src/module.js')

test('Cubo 3 * 3 * 3 = 27', () => {
  let res = cubo.cubo(3,3,3);
  expect(res).toBe(27);
});

//Crear funcion mock
cubo.aleatorio = jest.fn( () => 10 )

//Fails x ser funcion no determinista, aka el resultado cambia siempre. Para probar esto usamos un mock.
test('Numero aleatorio', () => {
  let res = cubo.aleatorio();
  expect(res).toBe(10);
});