// src/Saiyan.js

const Luchador = require("./Luchador");


class Saiyan extends Luchador{
    constructor(){
      super(nombre,velocidad,ataque,defensa,vida);
    }

  /**
   * Transforma al Saiyan en Super Saiyan, aumentando sus atributos.
   */
  transformar() {

  }

  /**
   * Revertir la transformación de Super Saiyan.
   */
  revertirTransformacion() {
   
  }
}

module.exports = Saiyan;