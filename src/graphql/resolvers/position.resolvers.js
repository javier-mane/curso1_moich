// import Positions from './../../models/powers.model'
import PuestoModel from '../../dbs/mongodb/empresas/models/position.model'

export default {
  queries: {
    positions: (root, args, context, info) => {
      return PuestoModel.find()
    },
    position: (root, args, context, info) => {
      // const { id } = args
      // return powers.filter(power => power.id === id)[0]
      return PuestoModel.findById(args.id)
    }
  },
  mutations: {
    createPosition: (root, args, context, info) => {
      const model = new PuestoModel(args.data)
      model.createdBy = 'Javier'

      return model.save()
    },
    updatePosition: (root, args, context, info) => {
      const { id, data } = args
      return PuestoModel.findOneAndUpdate({ _id: id }, {
        $set: {
          ...data,
          updatedAt: Date.now(),
          updatedBy: 'Javier'
        }
      }, { new: true })
    },
    deletePosition: (root, args, context, info) => {
      const { id } = args
      return PuestoModel.findOneAndRemove({ _id: id })
    },
    trashPosition: (root, args, context, info) => {
      const { id } = args
      return PuestoModel.findOneAndUpdate({ _id: id }, {
        $set: {
          deletedAt: Date.now(),
          deletedBy: 'Javier'
        }
      }, { new: true })
    },
    recoverPosition: (root, args, context, info) => {
      const { id } = args
      return PuestoModel.findOneAndUpdate({ _id: id }, {
        $set: {
          deletedAt: null,
          deletedBy: null
        }
      }, { new: true })
    }
  },
  relations: {
    getByEmpleado: (root, args, context, info) => {
      return PuestoModel.findById(root.positionId)
    }
  }
}
