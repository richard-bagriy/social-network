const router = require('express').Router();
const controller = require('../controllers/users');

router.get('/', controller.getUsers);
router.post('/subscribe', controller.subscribe);
router.delete('/subscribe', controller.unsubscribe);

module.exports = router;