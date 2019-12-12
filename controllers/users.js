const User = require('../models/user');

module.exports = {

    getUsers: async (req, res) => {

        const { start , limit } = req.body;
        
        try {
            const users = await User.find({}, {
                password: 0,
                __v: 0,
                date: 0,
                email: 0
            }).limit(limit).skip(start);

            res.json(users);

        } catch (err) {
            console.log(err);
        }

    }

}