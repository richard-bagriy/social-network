const bcrypt = require('bcryptjs')
const User = require('../models/user');
const Subscribers = require('../models/subsribers')
const fs = require('fs')

const getUserData = userId => {
    
    return Promise.all([
        User.findById( { _id: userId }, { __v: 0, password: 0, date: 0} ),
        Subscribers.countDocuments({ subscriberId: userId }),
        Subscribers.countDocuments({ userId }),
    ]);

}

const getUsers = (users, _id) => {
    return Promise.all(
        users.map( async ({ userId, subscriberId }) => {
            const id = userId ? userId : subscriberId;
            const [userData, subscribers, subscriptions] = await getUserData(id);
            const subscribed = await Subscribers.findOne({ 'subscriberId': id , 'userId': _id }) ? true : false;

            return {
                ...userData.toObject(),
                subscribers,
                subscriptions,
                subscribed
            };
        })
    )
}

module.exports = {

    getProfile: async (req, res) => {
        const { id } = req.params;
        
        try {

            const [data, subscribers, subscriptions] = await getUserData(id);

            const posts = await Promise.all(
                data.posts.map( async post => {
                    const { name, images } = await User.findById({ _id: post.userId }, 'name images');
                    
                    return {
                        ...post.toObject(),
                        image: images.photo,
                        name
                    }

                })
            );

            const user = {
                ...data.toObject(),
                posts,
                subscriptions,
                subscribers
            }

            res.json(user);
            
        } catch (err) {
            console.log(err);
        }
        
    },

    getSubscribers: async (req, res) => {
        const { id } = req.params;

        try {

            const userIds = await Subscribers.find({ subscriberId: id }, { _id : 0, subscriberId: 0 });
            
            if (userIds === null || userIds.length === 0) {
                res.json([]);
            }

            const subscribers = await getUsers(userIds, id);

            res.json(subscribers)

        } catch (err) {
            console.log(err)
        }

    },

    getSubscriptions: async (req, res) => {
        const { id } = req.params;
        
        try {

            const userIds = await Subscribers.find({ userId: id }, { _id: 0, userId: 0 } );
            
            if (userIds === null || userIds.length === 0) {
                res.json([])
            }

            const subscriptions = await getUsers(userIds, id);
            
            res.json(subscriptions);
            
        } catch(err) {
            console.log(err);
        }
    },

    newPost: async (req, res) => {
        const { authID, userId, message } = req.body;
        const post = { userId: authID , message };
        
        try {
            /* Save the post */
            const user = await User.findById({ _id: userId }, { __v: 0, password: 0, date: 0 });
            user.posts.push(post);
            await user.save();

            /* Get post with additional user Info */
            const { name, images } = await User.findById({ _id: authID }, 'name images');
            res.json({ 
                ...user.posts[user.posts.length - 1].toObject(),
                name, 
                image: images.photo 
            })
        } catch (err) {
            console.log(err);
        }
    },

    deletePost: async (req, res) => {
        const { userId, postId } = req.body;

        try {
            await User.updateOne({ _id: userId }, {
                $pull: { 
                    posts: { _id: postId }
                }
            })

            res.json({ message: 'Post successfully deleted ^^' });
        } catch (err) {
            console.log(err)
        }
    },

    updateProfile: async (req, res) => {
        const { authID, data } = req.body

        try {
            await User.findByIdAndUpdate({ _id: authID }, { ...data });
            res.json({ message: 'Profile successfully updated' })
        } catch (err) {
            console.log(err);
        }
    },

    changePassword: async (req, res) => {
        const { authID, password } = req.body

        try {
            const salt = await bcrypt.genSalt(10);
            const hashPassword = await bcrypt.hash(password, salt)
            await User.findByIdAndUpdate({ _id: authID }, { password: hashPassword } )
            res.json({ message: 'Password successfully updated' })
        } catch(err) {
            console.log(err);
        }
    },

    updateImage: async (req, res) => {
        const { authID, name, imageName } = req.body
        const { destination } = req.file
        
        try {
            const noDelete = [
                'user-background.png',
                'user-image-female.png',
                'user-image-male.png'
            ]

            const user = await User.findById({ _id: authID }).select('images')

            /* Yep i know, but it's... Will be fixed in future */
            if (!noDelete.includes(user.images[name])) {
                await fs.unlink(destination + user.images[name], err => {
                    if (err) console.log(err)
                })
            }

            user.images[name] = imageName
            user.save()

            res.json({ images: user.images })
        } catch(err) {
            console.log(err)
        }
    }

}