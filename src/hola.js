let bienVenida = () => {
  return 'Hola mundo!!'

}

let Hola = (name) => {
  return `Hola ${name} Bienvenido al Curso de GraphQL`
}

const Adios = (name) => {
  return `Adios ${name} Bienvenido al Curso de GraphQL`
}

const config = {
  mongodb: {
    user: 'javier',
    pass: 'xxxx',
    host: '10.0.0.0'
  }
}

// const obj = {
//     Hola: Hola,
//     Adios: Adios
// }

export {
  Hola as default,
  Adios,
  bienVenida,
  config
}

// module.exports = {
//     Hola,
//     Hola1,
//     bienVenida
// }
