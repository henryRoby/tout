const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const methodOverride = require('method-override')
const dbConfig = require('./Config/config.js')
const mongoose = require('mongoose')
const route = require('./Route/route')
const cors= require('cors')
const fileUpload = require('express-fileupload')

app.use(cors())
app.use(methodOverride('X-HTTP-Method')) 
app.use(methodOverride('X-HTTP-Method-Override'))
app.use(methodOverride('X-Method-Override'))
app.use(methodOverride('_method'))
app.use(cors())
app.use(fileUpload())
app.use('/public', express.static(__dirname + '/public'))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use('/',route)

mongoose.Promise = global.Promise

// Connecting to the database
mongoose.connect(dbConfig.url, {
    useNewUrlParser: true
}).then(() => {
    console.log("Successfully connected to the database")    
}).catch(err => {
    console.log('Could not connect to the database. Exiting now...', err)
    process.exit()
})

app.use('/',route)
app.listen(8080);
