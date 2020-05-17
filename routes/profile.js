const router = require('express').Router();
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
    updateImage,
    getEvents
 } = require('../controllers/profile');

router.get('/:id', getProfile)
router.get('/subscribers/:id', getSubscribers)
router.get('/subscriptions/:id', getSubscriptions)
router.post('/post', newPost)
router.delete('/post', deletePost)
router.put('/update', updateProfile)
router.put('/changePassword', changePassword)
router.put('/updateImage', [upload, resizeImage], updateImage)
router.get('/events/:userId', getEvents)

module.exports = router;