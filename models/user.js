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
        unique: true,
        lowercase: true
    },
    password: {
        type: String,
        required: true,
    },
    gender: {
        type: String,
        required: true,
        lowercase: true
    },
    date: {
        type: Date,
        default: Date.now
    },
    image: {
        type: String,
        default: null
    }
})

module.exports = User = mongoose.model("users", UserSchema);