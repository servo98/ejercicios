const {isPair} = require('./ejercicios/condicionales')


describe('Función isPair', () => {
    // Casos de prueba con un arreglo
    const casosDePrueba = [
      { input: 2, expected: true },
      { input: 3, expected: false },
      { input: 0, expected: true },
      { input: -4, expected: true },
      { input: -3, expected: false },
      { input: 1001, expected: false },
      { input: 1002, expected: true },
    ];
  
    casosDePrueba.forEach(({ input, expected }) => {
      test(`Debería retornar ${expected} cuando el número ingresado es ${input}`, () => {
        expect(isPair(input)).toBe(expected);
      });
    });
  });