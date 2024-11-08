// src/Saiyan.js

const Luchador = require("./Luchador");


class Saiyan extends Luchador{
    constructor(nombre,velocidad,ataque,defensa,vida,transform=false){
      super(nombre,velocidad,ataque,defensa,vida);
      this.transform=transform;
    }

  /**
   * Transforma al Saiyan en Super Saiyan, aumentando sus atributos.
   */
  transformar() {
    if(!this.esSuperSaiyan){
      this.esSuperSaiyan = true;
      this.velocidad =velocidad* 1.3; 
      this.ataque =ataque* 1.3; 
      this.defensa =defensa* 1.3; 
    }
  }

  /**
   * Revertir la transformación de Super Saiyan.
   */
  revertirTransformacion() {
    if(this.esSuperSaiyan){
      this.esSuperSaiyan = false;
      this.velocidad =velocidad/1.3; 
      this.ataque =ataque/ 1.3; 
      this.defensa =defensa/ 1.3; 
    }
  }
  reiniciarsalud(){
    this.vida=100;
    this.revertirTransformacion();
  }
  recibirDanio(danio) {
    this.vida= vida-danio;

  }
}

module.exports = Saiyan;