
import PowerModel from '../../dbs/sqlserver/heroes/models/power.model'

let userName = 'Javier'

export default {
  queries: {
    powers: (root, args, context, info) => {
      return PowerModel.findAll()
    },
    power: (root, args, context, info) => {
      // const { id } = args
      // return powers.filter(power => power.id === id)[0]
      return PowerModel.findById(args.id)
    }
  },
  mutations: {
    createPower: async (root, args, context, info) => {
    //   const model = new PowerModel(args.data)
    //   model.createdBy = 'Javier'
    //   return model.save()
      const power = {
        ...args.data,
        createdBy: userName
      }
      return PowerModel.create(power)
    },
    updatePower: async (root, args, context, info) => {
      const { id, data } = args

      await PowerModel.update({
        ...data,
        updatedAt: Date.now(),
        updatedBy: userName
      }, {
        where: {
          ID: id
        }
      })
      return PowerModel.findById(id)
    },
    deletePower: async (root, args, context, info) => {
      const { id } = args
      return PowerModel.destroy({
        where: {
          ID: id
        }
      })
    },
    trashPower: async (root, args, context, info) => {
      const { id, data } = args

      await PowerModel.update({
        ...data,
        deletedAt: Date.now(),
        deletedBy: userName
      }, {
        where: {
          ID: id
        }
      })
      return PowerModel.findById(id)
    },
    recoverPower: async (root, args, context, info) => {
      const { id, data } = args

      await PowerModel.update({
        ...data,
        deletedAt: null,
        deletedBy: null
      }, {
        where: {
          ID: id
        }
      })
      return PowerModel.findById(id)
    }
  },
  relations: {
    getByHeroe: async (root, args, context, info) => {
      const { id } = root
      return PowerModel.findAll({ where: { heroeId: id } })
    }
  }
}
