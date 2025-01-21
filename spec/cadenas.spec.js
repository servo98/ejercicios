describe("Cadenas", () => {
  describe("Función vocalsCount", () => {
    const casosDePrueba = [
      { input: "hola", expected: 2 },
      { input: "HOLA", expected: 2 },
      { input: "123", expected: 0 },
      { input: "xyz", expected: 0 },
      { input: "JavaScript", expected: 3 },
    ];

    casosDePrueba.forEach(({ input, expected }) => {
      it(`Debería retornar ${expected} cuando la cadena es "${input}"`, () => {
        expect(vocalsCount(input)).toBe(expected);
      });
    });
  });
});
