const mongoose = require('mongoose')
const Schema = mongoose.Schema

const EventSchema = new Schema({

    title: {
        type: String,
        required: true
    },

    description: {
        type: String,
        required: true
    },

    logo: {
        type: String,
        required: true
    },

    cover: {
        type: String,
        required: true
    },

    gallery: [String],

    location: String,

    tags: String,

    social: [{

        network: {
            type: String,
            required: true
        },

        url: {
            type: String,
            required: true
        }
    }],

    url: String,

    email: {
        type: String,
        required: true
    },

    phone: {
        type: String,
        required: true
    },

    userId: {
        type: mongoose.Types.ObjectId,
        required: true
    }

})

module.exports = mongoose.model('event', EventSchema)