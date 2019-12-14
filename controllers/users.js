const User = require('../models/user');

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

    }

}