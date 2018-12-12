// import heroes from '../../models/heros.model'
import HeroeModel from '../../dbs/mongodb/heroes/models/heroe.model'

export default {
  queries: {
    heroes: (root, args, context, info) => {
      return HeroeModel.find()
    },
    heroe: (root, args, context, info) => {
      // const { id } = args
      // return heroes.filter(heroe => heroe.id === id)[0]
      return HeroeModel.findById(args.id)
    }
  },
  mutations: {
    createHeroe: (root, args, context, info) => {

      const model = new HeroeModel(args.data)
      model.createdBy = 'Javier'

      return model.save()
    },
    updateHeroe: (root, args, context, info) => {
      const { id, data } = args
      return HeroeModel.findOneAndUpdate({ _id: id }, {
        $set: {
          ...data,
          updatedAt: Date.now(),
          updatedBy: 'Javier'
        }
      }, { new: true })
    },
    deleteHeroe: (root, args, context, info) => {
      const { id } = args
      return HeroeModel.findOneAndRemove({ _id: id })
    },
    trashHeroe: (root, args, context, info) => {
      const { id } = args
      return HeroeModel.findOneAndUpdate({ _id: id }, {
        $set: {
          deletedAt: Date.now(),
          deletedBy: 'Javier'
        }
      }, { new: true })
    },
    recoverHeroe: (root, args, context, info) => {
      const { id } = args
      return HeroeModel.findOneAndUpdate({ _id: id }, {
        $set: {
          deletedAt: null,
          deletedBy: null
        }
      }, { new: true })
    }
  },
  relations: {
    getById: (root, args, context, info) => {
      const { heroeId } = root
      return HeroeModel.findById({ _id: heroeId })
    }
  }
}
