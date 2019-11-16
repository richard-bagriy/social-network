const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');

// register config from .env
require('dotenv').config();

// connect to db and fix some warning (in second argument when connect)
mongoose.connect(process.env.DB_HOST, { 
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
}).then(() => console.log("Connect to db was success")).catch(error => console.log(error))

//cors middelware
app.use(cors());

// middelwares
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

//routes middelware
app.use('/api/auth', require('./routes/auth'))

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`The server started on ${port}`))