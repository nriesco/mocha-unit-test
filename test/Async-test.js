var should = require("should");
var Async = require(__dirname + "/../lib/Async").Async;

var basePath = __dirname + "/../files/";

describe("Async", function() {

  describe("#leerContenidoDeArchivo(filename)", function() {

    // validara que podamos leer el resultado
    // fail!
    // it("prueba async 1", function() {
    //   Async.leerContenidoDeArchivo(__dirname + "/files/holaMundo.txt").should.equal("hola mundo!"); // así sería si fuera sync
    // });

    // validar que funcione
    it("prueba async 2", function(done) {
      var fileName = "holaMundo.txt";
      Async.leerContenidoDeArchivo(basePath + fileName, done); // así sería si fuera sync
    });

    // validar el resultado de la forma correcta
    it("prueba async 3", function(done) {
      var fileName = "holaMundo.txt";
      Async.leerContenidoDeArchivo(basePath + fileName, function(err, value) {
        if (!err) {
          value.should.equal("hola mundo!");
          done(null);
        } else {
          done(err);
        }
      });
    });

    // validar que algo debe generar un error
    it("prueba async 4", function(done) {
      var fileName = "FALSENAME.txt";
      // fileName = "sinAcceso.txt";
      Async.leerContenidoDeArchivo(basePath + fileName, function(err, value) {
        if (!err) {
          done(new Error("debería haber fallado, en cambio recibí el texto: " + value));
        } else {
          if (err.code === "ENOENT") {
            done(null);
          } else {
            done(new Error("hay un error pero no corresponde al esperado: " + err.message));
          }
        }
      });
    });
  });

});
