describe("Bucles", () => {
  describe("Función count", () => {
    // Casos de prueba con un arreglo
    const casosDePrueba = [
      { input: 1, expected: "1" },
      { input: 3, expected: "1,2,3" },
      { input: 5, expected: "1,2,3,4,5" },
      { input: 0, expected: "Número inválido" },
      { input: -3, expected: "Número inválido" },
      { input: 10, expected: "1,2,3,4,5,6,7,8,9,10" },
    ];

    // Iterar sobre los casos de prueba
    casosDePrueba.forEach(({ input, expected }) => {
      it(`Debería retornar '${expected}' cuando el número ingresado es ${input}`, () => {
        expect(count(input)).toBe(expected);
      });
    });
  });

  describe("Función sumUntil", () => {
    // Casos de prueba con un arreglo
    const casosDePrueba = [
      { input: 1, expected: 1 },
      { input: 3, expected: 6 }, // 1 + 2 + 3 = 6
      { input: 5, expected: 15 }, // 1 + 2 + 3 + 4 + 5 = 15
      { input: 0, expected: "Número inválido" },
      { input: -3, expected: "Número inválido" },
      { input: 10, expected: 55 }, // 1 + 2 + ... + 10 = 55
      { input: 100, expected: 5050 }, // 1 + 2 + ... + 100 = 5050
    ];

    // Iterar sobre los casos de prueba
    casosDePrueba.forEach(({ input, expected }) => {
      it(`Debería retornar ${expected} cuando el número ingresado es ${input}`, () => {
        expect(sumUntil(input)).toBe(expected);
      });
    });
  });

  describe("Función getPairs", () => {
    // Casos de prueba con un arreglo
    const casosDePrueba = [
      { input: 1, expected: "" },
      { input: 2, expected: "2" },
      { input: 5, expected: "2,4" },
      { input: 10, expected: "2,4,6,8,10" },
      { input: 0, expected: "Número inválido" },
      { input: -3, expected: "Número inválido" },
      { input: 8, expected: "2,4,6,8" },
    ];

    // Iterar sobre los casos de prueba
    casosDePrueba.forEach(({ input, expected }) => {
      it(`Debería retornar '${expected}' cuando el número ingresado es ${input}`, () => {
        expect(getPairs(input)).toBe(expected);
      });
    });
  });
});
