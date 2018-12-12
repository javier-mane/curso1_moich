// import powers from './../../models/powers.model'
import EmpresaModel from '../../dbs/mongodb/empresas/models/empresa.model'

export default {
  queries: {
    empresas: (root, args, context, info) => {
      return EmpresaModel.find()
    },
    empresa: (root, args, context, info) => {
      return EmpresaModel.findById(args.id)
    }
  },
  mutations: {
    createEmpresa: (root, args, context, info) => {
      const model = new EmpresaModel(args.data)
      model.createdBy = 'Javier'

      return model.save()
    },
    updateEmpresa: (root, args, context, info) => {
      const { id, data } = args
      return EmpresaModel.findOneAndUpdate({ _id: id }, {
        $set: {
          ...data,
          updatedAt: Date.now(),
          updatedBy: 'Javier'
        }
      }, { new: true })
    },
    deleteEmpresa: (root, args, context, info) => {
      const { id } = args
      return EmpresaModel.findOneAndRemove({ _id: id })
    },
    trashEmpresa: (root, args, context, info) => {
      const { id } = args
      return EmpresaModel.findOneAndUpdate({ _id: id }, {
        $set: {
          deletedAt: Date.now(),
          deletedBy: 'Javier'
        }
      }, { new: true })
    },
    recoverEmpresa: (root, args, context, info) => {
      const { id } = args
      return EmpresaModel.findOneAndUpdate({ _id: id }, {
        $set: {
          deletedAt: null,
          deletedBy: null
        }
      }, { new: true })
    }
  },
  relations: {
    getByEmpleado: (root, args, context, info) => {
      return EmpresaModel.findById(root.companyId)
    }
  }
}
