const mongoose = require('mongoose');


const tchatSchema = mongoose.Schema({
  _id:Number,
  message: String,
  idenvoyeur: Number,
  idreceveur: Number
 

}, {
  timestamps: true
});


  module.exports=mongoose.model('tchat',tchatSchema)