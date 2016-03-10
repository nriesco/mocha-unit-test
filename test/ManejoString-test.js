var should = require("should");
var ManejoString = require(__dirname + "/../lib/ManejoString").ManejoString;

describe("ManejoString", function() {

  describe("#minusculaPrimeraLetra(texto)", function() {

    it("si el dato es inválido retorna vacío ", function() {
      ManejoString.minusculaPrimeraLetra("").should.equal("");
      // ManejoString.minusculaPrimeraLetra(null).should.equal("");
      // ManejoString.minusculaPrimeraLetra(false).should.equal("");
    });

    it("el primer dato es numero", function() {
      ManejoString.minusculaPrimeraLetra("9lolo").should.equal("9lolo");
      ManejoString.minusculaPrimeraLetra("413").should.equal("413");
    });

    it("el primer caracter es minuscula", function() {
      ManejoString.minusculaPrimeraLetra("hola").should.equal("hola");
    });

    it("el primer caracter es mayuscula", function() {
      ManejoString.minusculaPrimeraLetra("Hola").should.equal("hola");
    });

    it("una sola letra", function() {
      ManejoString.minusculaPrimeraLetra("H").should.equal("h");
      ManejoString.minusculaPrimeraLetra("h").should.equal("h");
    });
  });

});
