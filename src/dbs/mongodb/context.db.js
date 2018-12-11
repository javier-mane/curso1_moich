
// mongodb://heroku_wbxhqr1c:cli72bjvnno4ka843p5hukar0t@ds131814.mlab.com:31814/heroku_wbxhqr1c

import mongoose from 'mongoose'
// import config from '../../../server.config'

const dbContext = mongoose.createConnection('mongodb://heroku_wbxhqr1c:cli72bjvnno4ka843p5hukar0t@ds131814.mlab.com:31814/heroku_wbxhqr1c', {
  useNewUrlParser: true,
  useCreateIndex: true
})

const {
  ObjectId
} = mongoose.Types

ObjectId.prototype.valueOf = function () {
  return this.toString()
}

export default dbContext
