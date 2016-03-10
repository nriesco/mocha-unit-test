var should = require("should");


// temporal para demo normalmente esto no debería estar acá
var sumarDosNumerosEnteros = function(a, b) {
  return (a + b);
};

describe("Test trivial!", function() {
  describe("#sumarDosNumerosEnteros", function() {
    it("sumando dos números fáciles", function() {
      (2 + 2).should.equal(2 + 2); // no hacer esto
      (2 + 2).should.equal(4); // esto es mejor
      sumarDosNumerosEnteros(2, 2).should.equal(4); // óptimo
    });
  });

  describe("#toUpperCase", function() {
    it("probando una funcionalidad de javascript", function() {
      "hola".toUpperCase().should.equal("HOLA");
      "hOlA".toUpperCase().should.equal("HOLA");
    });
  });
});
