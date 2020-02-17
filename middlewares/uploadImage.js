const multer = require('multer')
const { randomImageName } = require('../utils/helper')

const storage = multer.diskStorage({

    destination: (req, file, cb) => {
        cb(null, process.env.IMAGES_PATH)
    },

    filename: (req, file, cb) => {
        cb(null, randomImageName(file.originalname))
    }

})

module.exports = multer({ storage }).single('file')