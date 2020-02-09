const bcrypt = require('bcryptjs');
const User = require('../models/user');
const { signInValidate, signUpValidate } = require('../utils/validation');
const jwt = require('jsonwebtoken');

module.exports = {

    check: async (req, res) => {
        try {
            const token  = req.cookies.token;
            const { id } = await jwt.verify(token, process.env.TOKEN_SECRET);
            const user   = await User.findById(id).select('-password -__v -posts -date');

            res.json({
                ...user.toObject(),
                auth: true
            });
        } catch (err) {
            res.json({ auth: false });
        }
    },

    signUp: async (req, res) => {
        const {email, password} = req.body;
        
        //validate data from request
        const { error } = signUpValidate(req.body);
        if (error) {
            return res.json({ error: error.details[0].message });
        }

        //check email
        const user = await User.findOne({email});
        if (!user) {
            return res.json({ error: 'Email is wrong' });
        }
        
        //check pass
        const validPassword = await bcrypt.compare(password, user.password)
        if (!validPassword) {
            return res.json({ error: 'Password wrong' });
        }

        //create and assign token
        const token = jwt.sign({ id: user.id }, process.env.TOKEN_SECRET);

        res.cookie('token', token).json();
    },

    signIn: async (req, res) => {
        const {name, email, password, gender} = req.body;

        //Validate Data from request
        const { error } = signInValidate(req.body);
        if (error) {
            return res.json({ error: error.details[0].message });
        }
        
        //check email
        const emailExist = await User.findOne({email});
        if (emailExist) {
            return res.json({ error: 'This email is already used'})
        }

        // create hashed password
        const salt = await bcrypt.genSalt(10);
        const hashPassword = await bcrypt.hash(password, salt)

        const image = (gender === 'male') ? 'user-image-male.png' : 'user-image-female.png';

        const user = new User({ 
            name,
            email,
            password: hashPassword,
            gender,
            image
        });

        try {
            await user.save();
            res.status(200).json({message: 'User susseccful created, now you can login ^_^'});
        } catch (err) {
            res.json(err);
        }
    }
}