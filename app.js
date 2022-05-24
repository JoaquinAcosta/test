console.log("Hola Mundo!!");

const calculadora = require('./modules/calculadora');
const {argv} = require('process');

const operacion = argv[2];

console.log(operacion);