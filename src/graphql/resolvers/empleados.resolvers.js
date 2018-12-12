// import powers from './../../models/powers.model'
import EmpleadoModel from '../../dbs/mongodb/empresas/models/empleado.models'

export default {
  queries: {
    empleados: (root, args, context, info) => {
      return EmpleadoModel.find()
    },
    empleado: (root, args, context, info) => {
      return EmpleadoModel.findById(args.id)
    }
  },
  mutations: {
    createEmpleado: (root, args, context, info) => {
      const model = new EmpleadoModel(args.data)
      model.createdBy = 'Javier'

      return model.save()
    },
    updateEmpleado: (root, args, context, info) => {
      const { id, data } = args
      return EmpleadoModel.findOneAndUpdate({ _id: id }, {
        $set: {
          ...data,
          updatedAt: Date.now(),
          updatedBy: 'Javier'
        }
      }, { new: true })
    },
    deleteEmpleado: (root, args, context, info) => {
      const { id } = args
      return EmpleadoModel.findOneAndRemove({ _id: id })
    },
    trashEmpleado: (root, args, context, info) => {
      const { id } = args
      return EmpleadoModel.findOneAndUpdate({ _id: id }, {
        $set: {
          deletedAt: Date.now(),
          deletedBy: 'Javier'
        }
      }, { new: true })
    },
    recoverEmpleado: (root, args, context, info) => {
      const { id } = args
      return EmpleadoModel.findOneAndUpdate({ _id: id }, {
        $set: {
          deletedAt: null,
          deletedBy: null
        }
      }, { new: true })
    }
  },
  relations: {
    getByPosition: (root, args, context, info) => {
      return EmpleadoModel.find({ positionId: root._id })
    },
    getByEmpresa: (root, args, context, info) => {
      return EmpleadoModel.find({ companyId: root._id })
    }

  }
}
