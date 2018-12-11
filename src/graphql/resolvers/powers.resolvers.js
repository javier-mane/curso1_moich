import powers from './../../models/powers.model'

export default {
  queries: {
    powers: (root, args, context, info) => {
      return powers
    },
    power: (root, args, context, info) => {
      const { id } = args
      return powers.filter(power => power.id === id)[0]
    }
  },
  mutations: {
    createPower: (root, args, context, info) => {
      const power = {
        ...args.data,
        createdAt: new Date()
      }
      console.log(power)
      powers.push(power)
      return power
    },
    updatePower: (root, args, context, info) => {
      const { id, data } = args
      const power = powers.filter(heroe => power.id === id)[0]

      if (!power) {
        throw new Error('No se encontro el power')
      }

      powers.splice(powers.indexOf(power), 1)

      power.name = data.name
      power.heroeId = data.heroeId
      power.active = data.active

      powers.push(power)
      return power
    },
    deletePower: (root, args, context, info) => {
      const { id } = args
      const heroe = powers.filter(heroe => heroe.id === id)[0]

      if (!heroe) {
        throw new Error('No se encontro el heroe')
      }

      powers.splice(powers.indexOf(heroe), 1)
      return heroe
    }
  },
  relations: {
    getByHeroe: (root, args, context, info) => {
      return powers.filter(power => power.heroeId === root.id)
    }
  }
}
