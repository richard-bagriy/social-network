const User = require('../models/user');
const Subscriber = require('../models/subsribers');

module.exports = {

    getUsers: async (req, res) => {
        const { userId } = req.body;
        const page  = parseInt(req.query.page);
        const limit = parseInt(req.query.limit);

        try {
            const users = await User.find({ '_id': { $ne: userId } }, {
                password: 0,
                __v: 0,
                date: 0,
                email: 0
            })
            .limit(limit)
            .skip((page * limit) - limit);

            const Users = await Promise.all(users.map(async u => {
                const { _id, name, image, gender } = u;
                const subscribers   = await Subscriber.countDocuments({ 'subscriberId': _id });
                const subscriptions = await Subscriber.countDocuments({ 'userId': _id });
                const subscribed    = ( await Subscriber.findOne({ 'subscriberId': _id, 'userId': userId }) ) ? true : false;
                
                return {
                    _id,
                    name,
                    image,
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
        const { subscriberId, userId } = req.body;
        
        const subscriber = new Subscriber({ 
            userId,
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
        const { subscriberId, userId } = req.body;

        try {
            await Subscriber.deleteOne({
                userId,
                subscriberId
            });
            res.json({ message: 'Unsubsribe was successful' });
        } catch (err) {
            console.log(err);
        }
    }

}
