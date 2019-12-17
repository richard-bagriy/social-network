const mongose = require('mongoose');
const Schema  = mongose.Schema;

const SubscribersSchema = new Schema({
    userId: Number,
    subscriberId: Number,
}, {
    versionKey: false
});

module.exports = mongose.model('subscribers', SubscribersSchema);