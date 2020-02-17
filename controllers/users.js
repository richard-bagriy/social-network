const User = require('../models/user');
const Subscriber = require('../models/subsribers');

module.exports = {

    getUsers: async (req, res) => {
        const { authID } = req.body;
        const page  = parseInt(req.query.page);
        const limit = parseInt(req.query.limit);

        try {
            const users = await User.find({ '_id': { $ne: authID } }, {
                password: 0,
                __v: 0,
                date: 0,
                email: 0
            })
            .limit(limit)
            .skip((page * limit) - limit);

            const Users = await Promise.all(users.map(async u => {
                const { _id, name, images, gender } = u;
                const subscribers   = await Subscriber.countDocuments({ 'subscriberId': _id });
                const subscriptions = await Subscriber.countDocuments({ 'userId': _id });
                const subscribed    = ( await Subscriber.findOne({ 'subscriberId': _id, 'userId': authID }) ) ? true : false;
                
                return {
                    _id,
                    name,
                    images,
                    gender,
                    subscribers,
                    subscriptions,
                    subscribed
                }

            }));

            res.json(Users);

        } catch (err) {
            console.log(err);
        }

    },

    subscribe: async (req, res) => {
        const { subscriberId, authID } = req.body;
        
        const subscriber = new Subscriber({ 
            userId: authID,
            subscriberId,
        });

        try {
            await subscriber.save();
            res.json({ message : 'Subscribe was successful' });
        } catch(err) {
            console.log(err)
        }
    },

    unsubscribe: async (req, res) => {
        const { subscriberId, authID } = req.body;

        try {
            await Subscriber.deleteOne({
                userId: authID,
                subscriberId
            });
            res.json({ message: 'Unsubsribe was successful' });
        } catch (err) {
            console.log(err);
        }
    }

}
