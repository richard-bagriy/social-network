const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
    },
    gender: {
        type: Boolean,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    },
    followers : {
        type: Number,
        default: 0
    },
    following : {
        type: Number,
        default: 0
    }
})

module.exports = User = mongoose.model("users", UserSchema);