const bcrypt = require('bcryptjs');
const User = require('../models/user');
const { signInValidate, signUpValidate } = require('../validation');
const jwt = require('jsonwebtoken');

module.exports = {

    check: async (req, res) => {
        res.send('All work Wtf')
    },

    signUp: async (req, res) => {
        const {email, password} = req.body;

        //validate data from request
        const { error } = signUpValidate(req.body);
        if (error) {
            return res.status(400).json({ error: error.details[0].message });
        }

        //check email
        const user = await User.findOne({email});
        if (!user) {
            return res.status(400).json({ error: 'Email is wrong' });
        }

        //check pass
        const validPassword = await bcrypt.compare(password, user.password)
        if (!validPassword) {
            return  res.status(400).json({ error: 'Password wrong' });
        }

        //create and assign token
        const token = jwt.sign({ id: user.id }, process.env.TOKEN_SECRET);

        res.header('auth-token', token).send(token);
    },

    signIn: async (req, res) => {
        const {name, email, password, gender} = req.body;

        //Validate Data from request
        const { error } = signInValidate(req.body);
        if (error) {
            return res.status(400).json({ error: error.details[0].message });
        }

        //check email
        const emailExist = await User.findOne({email});
        if (emailExist) {
            return res.status(400).json({ error: 'This email is already used'})
        }

        // create hashed password
        const salt = await bcrypt.genSalt(10);
        const hashPassword = await bcrypt.hash(password, salt)

        const user = new User({ 
            name,
            email,
            password: hashPassword,
            gender
        });

        try {
            const savedUser = await user.save();
            res.status(200).json(savedUser);
        } catch (err) {
            res.status(400).json(savedUser);
        }
    }
}