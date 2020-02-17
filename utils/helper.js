const path = require('path')
const crypto = require('crypto')

module.exports = {
    randomImageName: filename => {
        const extension = path.extname(filename)
        return crypto.randomBytes(12).toString('hex') + extension
    }
}