var express = require('express')
var app = express.Router();
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
var Controller= require('../Controller/Controller')

app.get('/register',Controller.getProfil)
app.post('/register',Controller.postProfil)
app.delete('/register/:_id',Controller.deleteProfil)
app.put('/',Controller.put)

module.exports = app;