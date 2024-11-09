// src/Earthling.js

const Luchador = require('./Luchador');

class Earthling extends Luchador{
  constructor(nombre,velocidad,ataque,defensa,vida,aumentAtaque=false){
    super(nombre,velocidad,ataque,defensa,vida,);
    this.aumentAtaque=aumentAtaque;

  }
  

  /**
   * Usa una técnica especial para aumentar el ataque.
   */
  usarTecnicaEspecial() {
    if(!this.aumentAtaque){
      this.aumentAtaque = true;
      this.ataque = this.ataque*1.2;

      console.log(`${this.nombre} aumenta su fuerza${this.ataque.toFixed(0)} unidades`);
    }
    
  }
  anularTecnica(){
    if(this.aumentAtaque){
      this.aumentAtaque = false;
      this.ataque =this.ataque/ 1.4;
    }
  }
  reiniciarsalud(){
    this.vida=100;
    this.anularTecnica();
  }
  recibirDanio(danio) {
    this.vida= this.vida-danio;

  }
}

module.exports = Earthling;
