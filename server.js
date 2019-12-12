const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const cookieParser = require('cookie-parser');

// register config from .env
require('dotenv').config();

// connect to db and fix some warning (in second argument when connect)
mongoose.connect(process.env.DB_HOST, { 
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
}).then(() => {
    console.log("Connect to db was success")
}).catch(error => {
    console.log(error)
});

//cors middelware
app.use(cors({
    origin: process.env.ORIGIN,
    credentials: true
}));

// Cookie middleware
app.use(cookieParser());

// middelwares
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

//routes 
app.use('/api/auth', require('./routes/auth'))
app.use('/api/users', require('./routes/users'))

app.listen(process.env.APP_PORT, () => console.log(`The server started on ${process.env.APP_PORT}`))