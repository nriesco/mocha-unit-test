exports.ManejoString = {
  /**
   * descripción de una línea
   *
   * descripción en detalle
   *
   * descripción del algoritmo
   *
   * @param {string} texto Texto de entrada
   * @returns {string} texto de salida
   *
   * @test {} si el dato es inválido retorna ''
   * @test {} si el dato es número, no hay cambios
   * @test {} primer carácter es minúscula, no hay cambios
   * @test {} primer carácter es mayúscula, no hay cambios
   * @test {} primer carácter es símbolo, no hay cambios
   * @test {} una sola letra
   * @test {} texto espacio
   * @test {} espacio al inicio
   */
  minusculaPrimeraLetra: function(texto) {
    return texto.substr(0, 1).toLowerCase() + texto.substr(1, texto.length);
    // if (texto === null || typeof texto == 'undefined' || texto === false) {
    //   return '';
    // } else {}
    // texto = texto + '';
    // if (texto.length > 1) {
    //   texto = texto.substr(0, 1).toLowerCase() + texto.substr(1);
    // } else if (texto.length == 1) {
    //   texto = texto.substr(0, 1).toLowerCase();
    // } else {}
    // return texto;
  }
};
