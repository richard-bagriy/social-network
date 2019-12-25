const User = require('../models/user');
const Subscriber = require('../models/subsribers');

module.exports = {

    getProfile: async (req, res) => {
        const { id } = req.params;
        
        try {
            const {
                image,
                name,
                gender
            } = await User.findById({ _id: id }).select('image name gender');

            const subscriptions = await Subscriber.countDocuments({ userId: id });
            const subscribers   = await Subscriber.countDocuments({ subscriberId: id });

            const user = {
                image,
                name,
                gender,
                subscriptions,
                subscribers
            };
            
            res.json(user);
            
        } catch (err) {
            console.log(err);
        }
        
    }

}