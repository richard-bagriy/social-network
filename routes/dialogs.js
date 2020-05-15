const router = require('express').Router()
const { getAll, getDialog, newMessage } = require('../controllers/dialogs')

router.get('/:userId?', getAll)
router.get('/dialog/:userId', getDialog)
router.post('/dialog/:userId', newMessage)

module.exports = router