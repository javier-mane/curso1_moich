// const {Hola, Adios, bienVenida}  = require('./hola');
import Hola, { Adios, config } from './hola'

console.log(Hola('javier'))
console.log(Adios('javier'))

// console.log(bienVenida());

let mongoDB = {
  ...config.mongodb
}

console.log(mongoDB)
