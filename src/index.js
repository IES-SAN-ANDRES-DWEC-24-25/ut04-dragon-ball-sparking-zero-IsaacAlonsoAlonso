// src/index.js

const Saiyan = require('./Saiyan');
const Namekian = require('./Namekian');
const Earthling = require('./Earthling');
const Torneo = require('./Torneo');

// Crear luchadores de prueba con diferentes razas
const luchadores = [
new Saiyan ("Goku",60,80,65,100),
new Saiyan ("Vegeta",65,85,65,100),
new Saiyan ("Gohan",70,80,65,100),
new Namekian ("Piccolo",70,75,70,100),
new Namekian  ("Nail",65,75,70,100),
new Earthling  ("Krillin",80,70,75,100),
new Earthling  ("Ten Shinhan",80,70,75,100),
new Earthling  ("Yamcha",80,70,75,100)
];

// Crear y iniciar el torneo
let torneo= new Torneo(luchadores);
let ganador= torneo.iniciar();
