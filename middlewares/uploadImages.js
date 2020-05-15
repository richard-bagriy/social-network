const multer = require('multer')
const { randomImageName } = require('../utils/helper')

const storage = multer.diskStorage({

    destination: (req, file ,cb) => {
        let path = process.env.IMAGES_PATH_EVENT;
        
        switch (file.fieldname) {
            case 'logo':
                path = path + 'logo/'
                break;
            case 'cover':
                path = path + 'cover/'
                break;
            case 'gallery':
                path = path + 'gallery/'
                break;
            default: ''
        }

        cb(null, path)
    },

    filename: (req, file, cb) => {
        cb(null, randomImageName(file.originalname))
    }
})

module.exports = multer({ storage }).any()