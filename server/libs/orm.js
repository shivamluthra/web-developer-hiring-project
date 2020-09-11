const mongoose = require('mongoose')
const mongo_host = process.env.mongo_host
const mongo_port = process.env.mongo_port
const mongo_database = process.env.mongo_database

let ORM = function() {
  this.models = {}
}

ORM.prototype.connect = function() {
  return new Promise((resolve, reject) => {
    const config = {
      useNewUrlParser: true
    }
    mongoose.connect(`mongodb://${mongo_host}:${mongo_port}/${mongo_database}?ssl=true`, config)
    var db = mongoose.connection
    db.once('error', (error) => {
      reject(error)
    })
    db.once('open', function() {
      resolve()
    })
  })
}

ORM.prototype.loadModels = function() {
  this.models.Invoice = require('./models/invoice')
  this.models.Payment = require('./models/payment')
  this.models.Policy = require('./models/policy')
  this.models.State = require('./models/state')
}

module.exports = ORM
