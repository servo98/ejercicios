describe("Función isPair", () => {
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
    it(`Debería retornar ${expected} cuando el número ingresado es ${input}`, () => {
      expect(isPair(input)).toBe(expected);
    });
  });
});

describe("Función greatest", () => {
  const casosDePrueba = [
    { input: [5, 10], expected: 10 },
    { input: [-5, -10], expected: -5 },
    { input: [7, -3], expected: 7 },
    { input: [4, 4], expected: 4 },
    { input: [0, 5], expected: 5 },
    { input: [0, -5], expected: 0 },
    { input: [100, 50], expected: 100 },
    { input: [-100, -50], expected: -50 },
  ];

  casosDePrueba.forEach(({ input, expected }) => {
    const [number1, number2] = input;
    it(`Debería retornar ${expected} cuando los números ingresados son ${number1} y ${number2}`, () => {
      expect(greatest(number1, number2)).toBe(expected);
    });
  });
});
