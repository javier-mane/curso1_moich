// import powers from './../../models/powers.model'
import PowerModel from '../../dbs/mongodb/heroes/models/power.model'

export default {
  queries: {
    powers: (root, args, context, info) => {
      return PowerModel.find()
    },
    power: (root, args, context, info) => {
      // const { id } = args
      // return powers.filter(power => power.id === id)[0]
      return PowerModel.findById(args.id)
    }
  },
  mutations: {
    createPower: (root, args, context, info) => {
      const model = new PowerModel(args.data)
      model.createdBy = 'Javier'

      return model.save()
    },
    updatePower: (root, args, context, info) => {
      const { id, data } = args
      return PowerModel.findOneAndUpdate({ _id: id }, {
        $set: {
          ...data,
          updatedAt: Date.now(),
          updatedBy: 'Javier'
        }
      }, { new: true })
    },
    deletePower: (root, args, context, info) => {
      const { id } = args
      return PowerModel.findOneAndRemove({ _id: id })
    },
    trashPower: (root, args, context, info) => {
      const { id } = args
      return PowerModel.findOneAndUpdate({ _id: id }, {
        $set: {
          deletedAt: Date.now(),
          deletedBy: 'Javier'
        }
      }, { new: true })
    },
    recoverPower: (root, args, context, info) => {
      const { id } = args
      return PowerModel.findOneAndUpdate({ _id: id }, {
        $set: {
          deletedAt: null,
          deletedBy: null
        }
      }, { new: true })
    }
  },
  relations: {
    getByHeroe: (root, args, context, info) => {
      return PowerModel.find({ heroeId: root._id })
    }
  }
}
