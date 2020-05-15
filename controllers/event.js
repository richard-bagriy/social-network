const Event = require('../models/event')
const User = require('../models/user')

module.exports = {

    addEvent: async (req, res) => {
        const { authID, ...data} = req.body
        const files = req.files

        data.gallery = []
        data.social = JSON.parse(data.social)
        data.userId = authID

        files.forEach(({ fieldname, filename }) => {

            if (fieldname === 'gallery') {
                data.gallery.push(filename)
            } else {
                data[fieldname.toString()] = filename
            }
            
        });

        const result = await new Event(data).save()
        
        res.send({ success: true })
    },

    getAll: async (req, res) => {
        const limit = parseInt(req.query.limit)
        const page = parseInt(req.query.page)
        
        const events = await Event.find({})
            .limit(limit)
            .skip((page * limit) - limit)
            .select('title location cover')
            .populate('userId', 'name images.photo _id')
            
        res.send(events)
    }

}