const Mongoose = require('mongoose')

let Model = Mongoose.model('State', new Mongoose.Schema({
    status: {
        type: String,
        enum: ['active', 'inactive'],
        default: 'active'
    },
    policy_id: {
        type: Mongoose.Schema.Types.ObjectId,
        ref: 'Policy'
    },
    reason: {
        type: String,
        enum: ['Policy Created', 'Premium Overdue'],
        default: 'Policy Created'
    },
}, { id: true, timestamps: true, collection: 'State' }))

module.exports = Model
