const mongoose = require('mongoose')
const Schema = mongoose.Schema

const MessageSchema = new Schema({

    user_id: {
        type: mongoose.Types.ObjectId,
        required: true,
    },

    message: {
        type: String
    },

    sent_time: {
        type: Date,
        default: Date.now()
    }

}, { versionKey: false })

const ConversationsSchema = new Schema({

    members: [mongoose.Types.ObjectId],
    messages: [MessageSchema]

}, { versionKey: false })

module.exports = mongoose.model('conversation', ConversationsSchema);