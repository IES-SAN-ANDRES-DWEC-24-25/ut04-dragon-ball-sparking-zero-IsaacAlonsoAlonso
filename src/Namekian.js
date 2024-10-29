// Los Namekians pueden regenerar salud una vez durante la batalla.

// src/Namekian.js

const Luchador = require('./Luchador');

class Namekian extends Luchador{
  constructor(){
    super(nombre,velocidad,ataque,defensa,vida);
  }

  /**
   * Regenera salud si aún no lo ha hecho en la batalla.
   */
  regenerarSalud() {
   
  }
}

module.exports = Namekian;
