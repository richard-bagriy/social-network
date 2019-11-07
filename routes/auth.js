const router = require('express').Router();
const AuthController = require('../controllers/auth');

router.get('/', (req, res) => AuthController.check(req, res) )
router.post('/registration', (req, res) => AuthController.signIn(req, res) );
router.post('/login', (req, res) => AuthController.signUp(req, res) );

module.exports = router;