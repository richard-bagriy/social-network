const express = require('express')
const app = express()
const config = require('dotenv').config()
const bodyParser = require('body-parser')
const port = process.env.PORT || 3001

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

const auth = require('./routes/auth.js');
app.use('/api/auth', auth)

app.get('*', (req, res) => res.send('404'))

app.listen(port, () => console.log(`The server started on ${port}`))