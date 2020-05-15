const Event = require('../models/event')

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
    }

}