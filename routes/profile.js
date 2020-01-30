const router = require('express').Router();
const controller = require('../controllers/profile');
const checkToken = require('../middlewares/checkToken');

router.get('/:id', checkToken, controller.getProfile)
router.get('/subscribers/:id', checkToken, controller.getSubscribers)
router.get('/subscriptions/:id', checkToken, controller.getSubscriptions)
router.post('/post', checkToken, controller.newPost)

module.exports = router;