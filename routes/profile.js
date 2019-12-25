const router = require('express').Router();
const controller = require('../controllers/profile');
const checkToken = require('../middlewares/checkToken');

router.get('/:id', checkToken, controller.getProfile);

module.exports = router;