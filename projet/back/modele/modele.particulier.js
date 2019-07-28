
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ParticulierSchema = new Schema({
    _id:{
        type:Number
    },
    id2:{
        type:Number
    },
    
    nom: {
        type: String,
        required: true
    },
    prenom: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    telephone: {
        type: String,
        required: true
    },
   
    avatar: {
        type: String
    },
    date: {
        type: Date,
        default: Date.now
    }
});

const User = mongoose.model('particulier', ParticulierSchema);

module.exports = User;