const router = require('express').Router();
const checkToken = require('../middlewares/checkToken');
const upload = require('../middlewares/uploadImage')
const { resizeImage } = require('../middlewares/resizeImage')
const { 
    getProfile,
    getSubscribers,
    getSubscriptions,
    newPost,
    deletePost,
    updateProfile,
    changePassword,
    updateImage
 } = require('../controllers/profile');

router.get('/:id', checkToken, getProfile)
router.get('/subscribers/:id', checkToken, getSubscribers)
router.get('/subscriptions/:id', checkToken, getSubscriptions)
router.post('/post', checkToken, newPost)
router.delete('/post', checkToken, deletePost)
router.put('/update', checkToken, updateProfile)
router.put('/changePassword', checkToken, changePassword)
router.put('/updateImage', [upload, checkToken, resizeImage], updateImage)

module.exports = router;