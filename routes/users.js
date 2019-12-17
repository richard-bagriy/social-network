const router = require('express').Router();
const controller = require('../controllers/users');
const checkToken = require('../middlewares/checkToken');

router.get('/', checkToken, controller.getUsers);
router.post('/subscribe', checkToken, controller.subscribe);
router.delete('/subscribe', checkToken, controller.unsubscribe);

module.exports = router;