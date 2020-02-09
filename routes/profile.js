const router = require('express').Router();
const checkToken = require('../middlewares/checkToken');
const { 
    getProfile,
    getSubscribers,
    getSubscriptions,
    newPost,
    deletePost,
    updateProfile
 } = require('../controllers/profile');

router.get('/:id', checkToken, getProfile)
router.get('/subscribers/:id', checkToken, getSubscribers)
router.get('/subscriptions/:id', checkToken, getSubscriptions)
router.post('/post', checkToken, newPost)
router.delete('/post', checkToken, deletePost)
router.put('/update', checkToken, updateProfile)

module.exports = router;