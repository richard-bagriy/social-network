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
        
        res.json({ success: true })
    },

    getAll: async (req, res) => {
        const limit = parseInt(req.query.limit)
        const page = parseInt(req.query.page)
        
        const data = await Event.find({})
            .limit(limit)
            .skip((page * limit) - limit)
            .select('title location cover')
            .populate('userId', 'name images.photo _id savedEvents')
        
        const events = await Promise.all(
            data.map(event => {
                const { _id, title, location, cover, userId} = event

                const saved = userId.savedEvents.includes(_id) ? true : false
                
                return {
                    _id, title, location, cover,
                    userId: userId._id,
                    userName: userId.name,
                    userImage: userId.images.photo,
                    saved
                }
            })
        )
            
        res.json(events)
    },

    getSaved: async (req, res) => {
        const { authID } = req.body

        const data = await User.findById({ _id: authID })
            .select('savedEvents')
            .populate('savedEvents', 'title location cover userId')

        const events = await Promise.all(
            data.savedEvents.map(async event => {

                const { name, images:{ photo }, savedEvents } = await User.findById({ _id: event.userId })
                    .select('name images.photo savedEvents')

                const saved = savedEvents.includes(event._id) ? true : false

                return {
                    ...event.toObject(),
                    userName: name,
                    userImage: photo,
                    saved
                }
            })
        )

        res.json(events)
    },

    saveEvent: async (req, res) => {
        const { authID, eventId } = req.body
        
        await User.findById({ _id: authID }, {}, (err, doc) => {

            doc.savedEvents.push(eventId)
            doc.save();

            res.json({ message: 'Event successfully saved' })
        })
    },

    deleteEvent: async (req, res) => {
        const { authID, eventId } = req.body

        await User.findByIdAndUpdate({ _id: authID }, { $pull: { 'savedEvents': eventId } })

        res.json({ message: 'Event successfully removed' })
    }

}