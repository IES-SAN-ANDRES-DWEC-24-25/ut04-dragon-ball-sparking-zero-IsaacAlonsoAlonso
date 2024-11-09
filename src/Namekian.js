// Los Namekians pueden regenerar salud una vez durante la batalla.

// src/Namekian.js

const Luchador = require('./Luchador');

class Namekian extends Luchador{
  constructor(nombre,velocidad,ataque,defensa,vida,regeneracion=false){
    super(nombre,velocidad,ataque,defensa,vida);
    this.regeneracion=regeneracion;
  }

  /**
   * Regenera salud si aún no lo ha hecho en la batalla.
   */
  regenerarSalud() {
    if(!this.regeneracion){
      this.regeneracion = true;
      this.vida=vida+30;
    }
  }
  reiniciarsalud(){
    this.vida=100;
  }
  recibirDanio(danio) {
    this.vida= this.vida-danio;

  }

}

module.exports = Namekian;
