const Mongoose = require('mongoose')

let Model = Mongoose.model('Invoice', new Mongoose.Schema({
    policy_id: {
        type: Mongoose.Schema.Types.ObjectId,
        ref: 'Policy'
    },
    payment_amount: {
        type: Number,
        required: true
    }
}, { id: true, timestamps: true, collection: 'Invoice' }))

module.exports = Model
