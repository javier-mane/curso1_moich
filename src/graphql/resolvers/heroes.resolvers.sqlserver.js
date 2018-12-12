
import HeroeModel from '../../dbs/sqlserver/heroes/models/heroe.model'

let userName = 'Javier'

export default {
  queries: {
    heroes: (root, args, context, info) => {
    // Mongo return HeroeModel.find()
      return HeroeModel.findAll()
    },
    heroe: (root, args, context, info) => {
      // const { id } = args
      // return heroes.filter(heroe => heroe.id === id)[0]
      // Mongo -> return HeroeModel.findById(args.id)
      return HeroeModel.findById(args.id)
    }
  },
  mutations: {
    createHeroe: async (root, args, context, info) => {
    //   const model = new HeroeModel(args.data)
    //   model.createdBy = 'Javier'
    //   return model.save()
      const heroe = {
        ...args.data,
        createdBy: userName
      }
      return HeroeModel.create(heroe)
    },
    updateHeroe: async (root, args, context, info) => {
      const { id, data } = args

      await HeroeModel.update({
        ...data,
        updatedAt: Date.now(),
        updatedBy: userName
      }, {
        where: {
          ID: id
        }
      })
      return HeroeModel.findById(id)
    },
    deleteHeroe: async (root, args, context, info) => {
      const { id } = args

      return HeroeModel.destroy({
        where: {
          ID: id
        }
      })
    },
    trashHeroe: async (root, args, context, info) => {
      const { id, data } = args

      await HeroeModel.update({
        ...data,
        deletedAt: Date.now(),
        deletedBy: userName
      }, {
        where: {
          ID: id
        }
      })
      return HeroeModel.findById(id)
    },
    recoverHeroe: async (root, args, context, info) => {
      const { id, data } = args

      await HeroeModel.update({
        ...data,
        deletedAt: null,
        deletedBy: null
      }, {
        where: {
          ID: id
        }
      })
      return HeroeModel.findById(id)
    }
  },
  relations: {
    getById: async (root, args, context, info) => {
      const { heroeId } = root
      return HeroeModel.findById(heroeId)
    }
  }
}
