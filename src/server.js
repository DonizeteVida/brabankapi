const express = require('express')
const app = express()

const bodyParser = require('body-parser')

app.use(express.json())
app.use(bodyParser.urlencoded({ extended: true }))

//routes
const user = require('./routes/users.routes')

app.use('/users', user)

module.exports = app