const User = require('../models/user');
const Subscribers = require('../models/subsribers');

module.exports = {

    getProfile: async (req, res) => {
        const { id } = req.params;
        
        try {

            const [data, subscriptions, subscribers] = await Promise.all([
                User.findById( { _id: id }, { __v: 0, password: 0, date: 0, _id: 0 } ),
                Subscribers.countDocuments({ userId: id }),
                Subscribers.countDocuments({ subscriberId: id })
            ])

            const user = {
                ...data.toObject(),
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

            const userIds = await (await Subscribers.find({ subscriberId: id }, { _id : 0, subscriberId: 0 }));
            
            if (userIds === null) {
                res.json([]);
            }

            const subscribers = await Promise.all(
                userIds.map( async user => {

                    const { userId } = user;
                    
                    const [userData, subscribers, subscriptions] = await Promise.all([
                        User.findById( { _id: userId }, { __v: 0, password: 0, date: 0} ),
                        Subscribers.countDocuments({ subscriberId: userId }),
                        Subscribers.countDocuments({ userId }),
                    ]);

                    const subscribed = await Subscribers.findOne({ 'subscriberId': userId , 'userId': id }) ? true : false;

                    return {
                        ...userData.toObject(),
                        subscribers,
                        subscriptions,
                        subscribed
                    };
                })
            )

            res.json(subscribers)

        } catch (err) {
            console.log(err)
        }

    }

}