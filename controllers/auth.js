const bcrypt = require('bcryptjs');
const User = require('../models/user');

module.exports = {

    check: async (req, res) => {
        return res.json('this functional in process');
    },

    signUp: async (req, res) => {
        const {email, password} = req.body;

        const user = await User.findOne({email});
    
        if (!user) {
            return res.json('User doesn\'t exist');
        }
    
        bcrypt.compare(password, user.password, (err, result) => {
            // i am stuck when check password ;;
        });
        
        res.json(user);
    },

    signIn: async (req, res) => {
        const {name, email, password} = req.body;
    
        const userExist = await User.find({email});
        
        //check user
        if (userExist.length > 0) {
            return res.json({ message: 'User already exist with this email'})
        }
    
        const newUser = new User({ 
            name,
            email,
            password,
            gender: 1
        });
    
        //generate a hash for password
        bcrypt.hash(password, 10, (err, hash) => {
            if (err) return res.json({message: err});
    
            newUser.password = hash;
            newUser.save();
        });
    
        return res.json({ message: 'User registration was success'})
    }

}