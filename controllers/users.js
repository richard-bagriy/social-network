const User = require('../models/user');
const Subscriber = require('../models/subsribers');

module.exports = {

    getUsers: async (req, res) => {
        const page  = parseInt(req.query.page);
        const limit = parseInt(req.query.limit);

        try {
            const users = await User.find({}, {
                password: 0,
                __v: 0,
                date: 0,
                email: 0
            }).limit(limit).skip((page * limit) - limit);

            res.json(users);

        } catch (err) {
            console.log(err);
        }

    },

    subscribe: async (req, res) => {
        const { userId, subscriberId } = req.body;

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
        const { userId, unsubscribeId } = req.body;

        try {
            await Subscriber.deleteOne({
                userId,
                subscriberId: unsubscribeId
            });
            res.json({ message: 'Unsubsribe was successful' });
        } catch (err) {
            console.log(err);
        }
    }

}