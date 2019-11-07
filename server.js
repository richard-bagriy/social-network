const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');

// register config from .env
require('dotenv').config();

//allow cors
app.use(cors());

// parse body request
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// connect to db and fix some warning (in second argument when connect)
mongoose.connect(process.env.DB_HOST, { 
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
}).then(() => console.log("MongoDB successfully connected")).catch(error => console.log(error))


//routes
const auth = require('./routes/auth.js');
app.use('/api/auth', auth)

const port = process.env.PORT || 1237
app.listen(port, () => console.log(`The server started on ${port}`))