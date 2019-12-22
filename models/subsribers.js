const mongose = require('mongoose');
const Schema  = mongose.Schema;

const SubscribersSchema = new Schema({
    userId: {
        type: String,
        required: true
    },
    subscriberId : {
        type: String,
        required: true
    }
}, {
    versionKey: false
});

module.exports = mongose.model('subscribers', SubscribersSchema);