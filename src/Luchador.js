// src/Luchador.js

class Luchador {
    // Implementa el constructor y los métodos necesarios
        constructor(nombre,velocidad,ataque,defensa,vida){
          this.nombre=nombre;
          this.velocidad=velocidad;
          this.ataque=ataque;
          this.defensa=defensa;
          this.vida=vida;
        }
        setSalud(vida){

          if(vida < 0){
            this.vida = 0;
          }else{
            this.vida = vida;
          }
      
        }
  
    /**
     * Realiza un ataque contra un oponente.
     * @param {Luchador} oponente - El luchador que recibe el ataque.
     * @returns {Object} - Resultado del ataque.
     */
    atacar(oponente) {
      // Decidir si el ataque es esquivado
      if(Math.random() > 0.7){
        console.log(`${oponente.nombre} El oponente ha esquivado`);
      }else{
        console.log(`${oponente.nombre}  El ataque ha impactado`);
        oponente.recibirDanio(this.ataque);
      }
  
      // Calcular daño
      let danio=0;
      if(this.ataque<oponente.defensa){
        danio = this.ataque * 0.2;
      }else{
        danio= this.ataque - oponente.defensa;
      }
  
      // Asegurar que el daño no sea negativo
      // Aplicar daño al oponente
      if (danio>=0){
        oponente.recibirDanio(danio);
      }
 
      // Retornar resultado del ataque
      
      
    }
  
    /**
     * Aplica daño a la salud del luchador.
     * @param {number} danio - Cantidad de daño recibido.
     */
    recibirDanio(danio) {
      this.setSalud(this.vida - danio);

    }
  
    /**
     * Verifica si el luchador está vivo.
     * @returns {boolean} - `true` si la salud es mayor a 0, `false` en caso contrario.
     */
    estaVivo() {
      if(this.vida>0){
        return true;
      }else{
        return false;
      }
    
     
    }
    reiniciarsalud(){
      this.vida=100;
    }
  }
  
  module.exports = Luchador;
  