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
    },
    
    about: {
        type: String,
        default: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris a interdum neque. Nullam mi sem, tristique vel volutpat ac, consectetur sit amet massa. Curabitur at ipsum leo. Morbi porttitor lorem velit, at lacinia magna pretium at. Duis id mattis nisl. In sit amet eros sed lorem hendrerit ornare quis in mauris. Sed nec purus euismod, pharetra nibh a, aliquet lorem.. Suspendisse pretium ullamcorper neque et aliquam."
    },

    phone: {
        type: String,
        default: null
    },

    address: {
        type: String,
        default: null,
    }

})

module.exports = mongoose.model("users", UserSchema);