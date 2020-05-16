const router = require('express').Router()
const { addEvent, getAll, getSaved, saveEvent, deleteEvent } = require('../controllers/event')
const uploadImages = require('../middlewares/uploadImages')
const authId = require('../middlewares/checkToken')

router.get('/', getAll)
router.post('/', [uploadImages, authId], addEvent)
router.get('/saved', getSaved)
router.post('/save', saveEvent)
router.delete('/save', deleteEvent)

module.exports = router