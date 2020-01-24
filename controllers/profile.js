const User = require('../models/user');
const Subscribers = require('../models/subsribers');

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
    }

}