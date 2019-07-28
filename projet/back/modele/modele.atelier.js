const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const AtelierSchema = new Schema({
    _id:{
        type:Number
    },
    id2:{
        type:Number
    },
    titre: {
        type: String,
    },
   description: {
        type: String,
      
    },
    date: {
        type:  String,
        
    },
    horaire: {
        type: String,
    },
    duree: {
        type: String,
    },

    placedispo: {
        type: Number,
       
    },
    placereserve: {
        type: Number,
      
    },prix: {
        type: Number,
       
    },
    image: {
        type:String},

    visibilite: {
        type:Boolean,
      
    },

    
});

const User = mongoose.model('atelier',  AtelierSchema);

module.exports = User;