// src/simularBatalla.js

/**
 * Simula una batalla entre dos luchadores.
 * @param {Luchador} luchador1 - Primer luchador.
 * @param {Luchador} luchador2 - Segundo luchador.
 * @returns {Luchador} - Ganador de la batalla.
 */
const ganador=null;
function simularBatalla(luchador1, luchador2) {
    console.log(`\nComienza la batalla entre ${luchador1.nombre} y ${luchador2.nombre}!`);
    
    let atacante = null;
    let defensor =null;
   
  
    // Determinar quién ataca primero basado en la velocidad
    
      
      if(luchador1.velocidad>luchador2.velocidad){
        console.log(`${luchador1.nombre}  es mas rapido y ataca primero`);
        atacante=luchador1;
          defensor=luchador2;
      }else if(luchador1.velocidad==luchador2.velocidad){
        // Si la velocidad es igual, elegir al azar
        if(Math.random() < 0.5){
          console.log(`${luchador1.nombre}  es mas rapido y ataca primero`);
          atacante=luchador1;
          defensor=luchador2;
        }else{
          console.log(`${luchador2.nombre}  es mas rapido y ataca primero`);
          atacante=luchador2;
          defensor=luchador1;
        }
      }else{
        console.log(`${luchador2.nombre}  es mas rapido y ataca primero`);
        atacante=luchador2;
          defensor=luchador1;
      }
  
    
  
    // Simular turnos hasta que uno de los luchadores pierda
    while (atacante.estaVivo() && defensor.estaVivo()) {

      if (atacante instanceof Saiyan) {
        if(atacante.transform =false &&Math.random() < 0.5){
            atacante.transformar();
      }
      }
      if (atacante instanceof Earthling &&Math.random() < 0.5&& atacante.aumentAtaque==false) {
        atacante.usarTecnicaEspecial();
      }
  
      if (atacante instanceof Namekian &&atacante.regenerarSalud &&atacante.salud < 50
      ) {
        atacante.regenerarSalud();
      }
    atacante.atacar(defensor);
    
    if (defensor.estaVivo()) {
      console.log(`\nEs el turno de ${defensor.nombre}.\n`);

      if (defensor instanceof Saiyan) {
        if(defensor.transform =false &&Math.random() < 0.5){
            defensor.transformar();
      }
    }
      if (defensor instanceof Earthling &&Math.random() < 0.5&& defensor.aumentAtaque==false) {
        defensor.usarTecnicaEspecial();
      }
  
      if (defensor instanceof Namekian &&defensor.regenerarSalud &&defensor.salud < 50
      ) {
        defensor.regenerarSalud();
      }
      defensor.atacar(atacante);
    }
    
  }
  if(atacante.estaVivo()=true) {
    if (atacante instanceof Saiyan) {
      atacante.revertirTransformacion();
    }
  
    if (atacante instanceof Earthling ) {
      atacante.anularTecnica();
    }
    ganador=atacante;
  }else{
    ganador=defensor;
    if (defensor instanceof Saiyan) {
      defensor.revertirTransformacion();
    }
  
    if (defensor instanceof Earthling ) {
      defensor.anularTecnica();
    }
  
  
  
}



   
    console.log(`El ganador de la batalla es ${ganador.nombre}!\n`);
    return ganador;
}
  module.exports = simularBatalla;
