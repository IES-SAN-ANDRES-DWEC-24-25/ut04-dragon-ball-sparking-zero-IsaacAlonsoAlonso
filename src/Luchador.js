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
        get nombre(){
          return this.nombre;
        }
        set nombre(nombre){
          this.nombre=nombre;
        }
        get ataque(){
          return this.ataque;
        }
        set ataque(ataque){
          this.ataque=ataque;
        }
        get velocidad(){
          return this.velocidad;
        }
        set velocidad(velocidad){
          this.velocidad=velocidad;
        }
        get defensa(){
          return this.defensa;
        }
        set defensa(defensa){
          this.defensa=defensa;
        }
        get vida(){
          return this.vida;
        }
        set vida(vida){
          this.vida=vida;
        }
  
    /**
     * Realiza un ataque contra un oponente.
     * @param {Luchador} oponente - El luchador que recibe el ataque.
     * @returns {Object} - Resultado del ataque.
     */
    atacar(oponente) {
      // Decidir si el ataque es esquivado
     
  
      // Calcular daño
      
  
      // Asegurar que el daño no sea negativo
      
  
      // Aplicar daño al oponente
     
  
      // Retornar resultado del ataque
      
    }
  
    /**
     * Aplica daño a la salud del luchador.
     * @param {number} danio - Cantidad de daño recibido.
     */
    recibirDanio(danio) {
      
    }
  
    /**
     * Verifica si el luchador está vivo.
     * @returns {boolean} - `true` si la salud es mayor a 0, `false` en caso contrario.
     */
    estaVivo() {
     
    }
  }
  
  module.exports = Luchador;
  