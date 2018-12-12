import Sequelize from 'sequelize'

// HOST: sql5036.smarterasp.net
// USER: DB_A10397_winsports_admin
// PASS: W1N5port5DB2017
// DB: DB_A10397_winsports

const sequelize = new Sequelize('DB_A10397_winsports', 'DB_A10397_winsports_admin', 'W1N5port5DB2017', {
  host: 'sql5036.smarterasp.net',
  dialect: 'mssql',
  operatorsAliases: false,
  //   dialectOptions: {
  //     instanceName: 'INTEGRATOR'
  //   },

  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  },
  logging: true,
  encrypt: true
})

export default sequelize
