const router = require('express').Router()
const User = require('../models/user')
const bcrypt = require("bcryptjs")
const validateRegistration = require('../validation/register')
const validateLogin = require('../validation/login')

router.get('/', (req, res) => {
    res.json('Check Auth-wtf')
})

router.post('/registration', (reg, res) => {
    return res.send().json({test: 'Hello World'});
    
    const {errors, isValid} =  validateRegistration(req.body)
    
    if (!isValid) {
        return res.status(400).json(errors);
    }

    User.findOne({email: req.body.mail}).then(user => {
        if (user) {
            return res.status(400).json({email: 'Email already exists'});
        } else {
            const newUser = User({
                name: req.body.name,
                email: req.body.password
            });

            bcrypt.genSalt(10, (err, salt) => {
                bcrypt.hash(newUser.password, salt, (err, hash) => {
                    if (err) throw err;

                    newUser.password = hash;
                    newUser.save()
                      .then(user => res.json(user))
                      .catch(err => console.log(err));
                })
            });
        }
    })
})



module.exports = router;