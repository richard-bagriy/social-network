const User = require('../models/user');
const Subscriber = require('../models/subsribers');

module.exports = {

    getProfile: async (req, res) => {
        const { id } = req.params;
        
        try {

            const [data, subscriptions, subscribers] = await Promise.all([
                User.findById( { _id: id },
                    {
                        __v: false,
                        password: false,
                        date: false,
                        _id: false
                    },
                ),
                Subscriber.countDocuments({ userId: id }),
                Subscriber.countDocuments({ subscriberId: id })
            ])

            const user = {
                ...data._doc,
                subscriptions,
                subscribers
            }

            res.json(user);
            
        } catch (err) {
            console.log(err);
        }
        
    }

}