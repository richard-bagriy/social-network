const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

// config from .env
require('dotenv').config()

// parse body request
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// connect to db 

mongoose.connect(process.env.DB_HOST)
    .then(() => console.log("MongoDB successfully connected"))
    .catch(error => console.log(error))

//routes
const auth = require('./routes/auth.js');
app.use('/api/auth', auth)

const port = process.env.PORT || 5000
app.listen(port, () => console.log(`The server started on ${port}`))