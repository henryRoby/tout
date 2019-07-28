const mongoose = require('mongoose');


const commentaireSchema = mongoose.Schema({
  _id:Number,
  comment: String,
  idarticle: Number,
  idenvoyeur: Number

}, {
  timestamps: true
});




  module.exports=mongoose.model('commentaire',commentaireSchema)
