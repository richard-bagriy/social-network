const sharp = require('sharp')
const { randomImageName } = require('../utils/helper')
const fs = require('fs')

module.exports = {
    resizeImage: async (req, res, next) => {
        const { name } = req.body
        const { path, destination } = req.file

        let width, height;

        switch(name) {
            case 'cover': 
                width  = 1500
                height = 1000
            break
            case 'photo': 
                width  = 150
                height = 150
            break
            default:
                width  = 1
                height = 1
        }

        try {

            const imageName = randomImageName(path)
            await sharp(path)
                .resize(width, height)
                .toFile(destination + imageName, (err, info) => {
                    fs.unlink(path, () => console.log(err) )
                })

            req.body.imageName = imageName
            next()
        } catch(err) {
            console.log(err)
        }
    }
}