const mongoose = require('mongoose');


const ProfilSchema = mongoose.Schema({
  _id:Number,
  nom: String,
  email: String
 
}, {
  timestamps: true
});




  module.exports=mongoose.model('Profil',ProfilSchema)