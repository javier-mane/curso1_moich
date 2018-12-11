import heroes from '../../models/heros.model'

export default {
  queries: {
    heroes: (root, args, context, info) => {
      return heroes
    },
    heroe: (root, args, context, info) => {
      const { id } = args
      return heroes.filter(heroe => heroe.id === id)[0]
    }
  },
  mutations: {
    createHeroe: (root, args, context, info) => {
      const heroe = {
        createdAt: new Date(),
        ...args.data
      }
      console.log(heroe)
      heroes.push(heroe)
      return heroe
    },
    updateHeroe: (root, args, context, info) => {
      const { id, data } = args
      const heroe = heroes.filter(heroe => heroe.id === id)[0]

      if (!heroe) {
        throw new Error('No se encontro el heroe')
      }

      heroes.splice(heroes.indexOf(heroe), 1)

      heroe.name = data.name
      heroe.img = data.img
      heroe.active = data.active

      console.log(heroe)
      heroes.push(heroe)
      return heroe
    },
    deleteHeroe: (root, args, context, info) => {
      const { id } = args
      const heroe = heroes.filter(heroe => heroe.id === id)[0]

      if (!heroe) {
        throw new Error('No se encontro el heroe')
      }

      heroes.splice(heroes.indexOf(heroe), 1)
      return heroe
    }
  },
  relations: {
    getById: (root, args, context, info) => {
      const { heroeId } = root
      const heroe = heroes.filter(heroe => heroe.id === heroeId)[0]
      return heroe
    }
  }
}
