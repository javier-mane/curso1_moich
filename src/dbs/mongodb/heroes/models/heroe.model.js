
import mongoose from 'mongoose'
import dbContext from '../context.db'

const Schema = mongoose.Schema

const modelSchema = new Schema({
  name: {
    type: String,
    required: [true, 'name es requerido']
  },
  img: {
    type: String,
    required: [true, 'img es requerido']
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

const model = dbContext.model('heroes', modelSchema)

export default model
