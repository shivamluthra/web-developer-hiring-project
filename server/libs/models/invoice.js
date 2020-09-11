const Mongoose = require('mongoose')

let Model = Mongoose.model('Invoice', new Mongoose.Schema({
    policy_id: {
        type: Mongoose.Schema.Types.ObjectId,
        ref: 'Policy'
    },
    amount_due: {
        type: Number,
        required: true
    },
    due_on: {
        type: Date,
        default: new Date().toISOString()
    }
}, { id: true, timestamps: true, collection: 'Invoice' }))

module.exports = Model
