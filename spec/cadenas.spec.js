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

  describe("Función countWords", () => {
    const casosDePrueba = [
      { input: "Hola mundo", expected: 2 },
      { input: "   Hola   mundo  ", expected: 2 },
      { input: "", expected: 0 },
      { input: "JavaScript es genial", expected: 3 },
      { input: "  Una sola palabra   ", expected: 3 },
    ];

    casosDePrueba.forEach(({ input, expected }) => {
      it(`Debería retornar ${expected} cuando la frase es "${input}"`, () => {
        expect(countWords(input)).toBe(expected);
      });
    });
  });

  describe("Función hideInfo", () => {
    const casosDePrueba = [
      { input: "1234567890", expected: "******7890" },
      { input: "abcdef", expected: "**cdef" },
      { input: "5564743902", expected: "******3902" },
      { input: "holaamiguito", expected: "********uito" },
      { input: "abcdefghijklm", expected: "*********jklm" },
    ];

    casosDePrueba.forEach(({ input, expected }) => {
      it(`Debería retornar "${expected}" cuando la cadena es "${input}"`, () => {
        expect(hideInfo(input)).toBe(expected);
      });
    });
  });

  describe("Función getlastWord", () => {
    const casosDePrueba = [
      { input: "Hola mundo", expected: "mundo" },
      { input: "   JavaScript es genial   ", expected: "genial" },
      { input: "", expected: "" },
      { input: "UnaPalabra", expected: "UnaPalabra" },
      { input: "   Última palabra aquí  ", expected: "aquí" },
    ];

    casosDePrueba.forEach(({ input, expected }) => {
      it(`Debería retornar "${expected}" cuando la cadena es "${input}"`, () => {
        expect(getlastWord(input)).toBe(expected);
      });
    });
  });
});
