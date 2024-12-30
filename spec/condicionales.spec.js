describe("Condicionales", () => {
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

  describe("Función compareLength", () => {
    // Casos de prueba con un arreglo
    const casosDePrueba = [
      { input: ["hola", "mundo"], expected: "cadena2" },
      { input: ["javascript", "js"], expected: "cadena1" },
      { input: ["abc", "abcdef"], expected: "cadena2" },
      { input: ["", "no vacío"], expected: "cadena2" },
      { input: ["no vacío", ""], expected: "cadena1" },
      { input: ["igualdad", "igualdad"], expected: "iguales" },
      { input: ["123", "12"], expected: "cadena1" },
      { input: ["abc", "abcd"], expected: "cadena2" },
    ];

    // Iterar sobre los casos de prueba
    casosDePrueba.forEach(({ input, expected }) => {
      const [string1, string2] = input;
      it(`Debería retornar '${expected}' cuando las cadenas son '${string1}' y '${string2}'`, () => {
        expect(compareLength(string1, string2)).toBe(expected);
      });
    });
  });

  describe("Función getDay", () => {
    const casosDePrueba = [
      { input: 1, expected: "lunes" },
      { input: 2, expected: "martes" },
      { input: 3, expected: "miércoles" },
      { input: 4, expected: "jueves" },
      { input: 5, expected: "viernes" },
      { input: 6, expected: "sábado" },
      { input: 7, expected: "domingo" },
      { input: 0, expected: "Número inválido" },
      { input: 8, expected: "Número inválido" },
      { input: -3, expected: "Número inválido" },
      { input: 10, expected: "Número inválido" },
    ];

    casosDePrueba.forEach(({ input, expected }) => {
      it(`Debería retornar '${expected}' cuando el número ingresado es ${input}`, () => {
        expect(getDay(input)).toBe(expected);
      });
    });
  });

  describe("Función gradeStudent", () => {
    // Casos de prueba con un arreglo
    const casosDePrueba = [
      { input: 95, expected: "A" },
      { input: 89, expected: "B" },
      { input: 75, expected: "C" },
      { input: 65, expected: "D" },
      { input: 50, expected: "F" },
      { input: 100, expected: "A" },
      { input: 90, expected: "A" },
      { input: 80, expected: "B" },
      { input: 70, expected: "C" },
      { input: 60, expected: "D" },
      { input: -5, expected: "Número inválido" },
      { input: 105, expected: "Número inválido" },
    ];

    // Iterar sobre los casos de prueba
    casosDePrueba.forEach(({ input, expected }) => {
      it(`Debería retornar '${expected}' cuando el número ingresado es ${input}`, () => {
        expect(gradeStudent(input)).toBe(expected);
      });
    });
  });
});
