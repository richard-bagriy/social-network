const Event = require('../models/event')
const User = require('../models/user')

module.exports = {

    addEvent: async (req, res) => {
        const { authID, ...data} = req.body
        const files = req.files

        data.gallery = []
        data.social = (data.social) ? JSON.parse(data.social) : []
        data.userId = authID

        files.forEach(({ fieldname, filename }) => {

            if (fieldname === 'gallery') {
                data.gallery.push(filename)
            } else {
                data[fieldname.toString()] = filename
            }
            
        });

        await new Event(data).save()
        
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
    },

    getSaved: async (req, res) => {
        const { authID } = req.body

        const { savedEvents } = await User.findById({ _id: authID })
            .select('savedEvents')
            .populate('savedEvents', 'title location cover')

        res.send(savedEvents)
    },

    saveEvent: async (req, res) => {
        const { authID, eventId } = req.body
        
        await User.findById({ _id: authID }, {}, (err, doc) => {

            doc.savedEvents.push(eventId)
            doc.save();

            res.send({ message: 'Event successfully saved' })
        })
    },

    deleteEvent: async (req, res) => {
        const { authID, eventId } = req.body

        await User.findByIdAndUpdate({ _id: authID }, { $pull: { 'savedEvents': eventId } })

        res.send({ message: 'Event successfully removed' })
    }

}