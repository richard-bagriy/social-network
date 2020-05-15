const router = require('express').Router()
const controller = require('../controllers/event')
const uploadImages = require('../middlewares/uploadImages')
const authId = require('../middlewares/checkToken')

router.post('/', [uploadImages, authId], controller.addEvent)

module.exports = router