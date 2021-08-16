const multiplicar = require("./helper/multiplicar")
var colors = require('colors');
const argv= require('./config/yargs')

console.log('base: yargs',argv.base);


multiplicar(argv.b, argv.l, argv.h)
.then(nombreArchivo => console.log(nombreArchivo, "Creado"))
.catch(err => console.log(err));