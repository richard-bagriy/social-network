const router = require('express').Router();
const User = require('../models/user');
const bcrypt = require("bcryptjs");

router.get('/', (req, res) => {
    res.json('Check Auth-wtf');
})

//very simply registration with check on email ()
router.post('/registration', async (req, res) => {
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
})

module.exports = router;