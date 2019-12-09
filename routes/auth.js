const router = require('express').Router();
const controller = require('../controllers/auth');
const checkToken = require('../middlewares/checkToken');

router.get('/', controller.check)
router.post('/registration', controller.signIn);
router.post('/login', controller.signUp);

module.exports = router;