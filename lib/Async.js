var fs = require('fs');

exports.Async = {
  /**
   * descripción de una línea
   *
   * descripción en detalle
   *
   * descripción del algoritmo
   *
   * @param {String} filenam path/to/file
   *
   * @test {} 
   */
  leerContenidoDeArchivo: function(fileName, callback) {

    // versión que delega el manejo de errores a quien lo llama
    fs.readFile(fileName, {
      encoding: 'utf-8'
    }, callback);

    // versión con manejo de errores:
    // var fileCallback = function(err, data) {
    //   if (!err) {
    //     callback(null, data);
    //   } else {
    //     callback(err);
    //   }
    // };

    // fs.readFile(fileName, {
    //   encoding: 'utf-8'
    // }, fileCallback);

  }
};
