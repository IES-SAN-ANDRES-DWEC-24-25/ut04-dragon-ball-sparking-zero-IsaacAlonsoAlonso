// src/Earthling.js

const Luchador = require('./Luchador');

class Earthling extends Luchador{
  constructor(){
    super(nombre,velocidad,ataque,defensa,vida);
  }
  

  /**
   * Usa una técnica especial para aumentar el ataque.
   */
  usarTecnicaEspecial() {
    
  }
}

module.exports = Earthling;
