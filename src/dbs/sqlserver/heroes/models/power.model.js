import Sequelize from 'sequelize'
import dbContext from '../context.db'

const model = dbContext.define('Powers', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: { max: 1000 }
  },
  heroeId: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  active: {
    type: Sequelize.BOOLEAN,
    defaultValue: true
  },
  createdAt: {
    type: Sequelize.DATE,
    defaultValue: Date.now
  },
  createdBy: {
    type: Sequelize.STRING,
    validate: { max: 1000 }
  },
  updatedAt: {
    type: Sequelize.DATE
  },
  updatedBy: {
    type: Sequelize.STRING,
    validate: { max: 1000 }
  },
  deletedAt: {
    type: Sequelize.DATE
  },
  deletedBy: {
    type: Sequelize.STRING,
    validate: { max: 1000 }
  }
},
{
  timestamps: false,
  freezeTableName: true
})
export default model
