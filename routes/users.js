const router = require('express').Router();
const controller = require('../controllers/users');
const checkToken = require('../middlewares/checkToken');

router.get('/', checkToken, controller.getUsers);

module.exports = router;