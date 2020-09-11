const Mongoose = require('mongoose')

let Model = Mongoose.model('Policy', new Mongoose.Schema({
    number: {
        type: String,
        required: true
    },
    annual_premium: {
        type: Number,
        required: true
    },
    effective_date: {
        type: Date,
        default: new Date().toISOString()
    }
}, { id: true, timestamps: true, collection: 'Policy' }))

module.exports = Model
