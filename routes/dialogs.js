const router = require('express').Router()
const checkToken = require('../middlewares/checkToken')
const {
    getAll,
    getDialog,
    newMessage
} = require('../controllers/dialogs')

router.get('/:userId?', checkToken, getAll)
router.get('/dialog/:userId', checkToken, getDialog)
router.post('/dialog/:userId', checkToken, newMessage)

module.exports = router