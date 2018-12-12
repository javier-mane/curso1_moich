import mongoose from 'mongoose'
import dbContext from '../context.db'

const Schema = mongoose.Schema

const modelSchema = new Schema({
  name: {
    type: String,
    required: [true, 'name es requerido']
  },
  address: {
    calle: {
      type: String
    },
    numero: {
      type: String
    },
    cololina: {
      type: String
    }
  },
  active: {
    type: Boolean,
    default: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  createdBy: {
    type: String
  },
  updatedAt: {
    type: Date
  },
  updatedBy: {
    type: String
  },
  deletedAt: {
    type: Date
  },
  deletedBy: {
    type: String
  }
})

const model = dbContext.model('empresas', modelSchema)

export default model
