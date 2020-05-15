const router = require('express').Router()
const { addEvent, getAll } = require('../controllers/event')
const uploadImages = require('../middlewares/uploadImages')
const authId = require('../middlewares/checkToken')

router.get('/', getAll)
router.post('/', [uploadImages, authId], addEvent)

module.exports = router