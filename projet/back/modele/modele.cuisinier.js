const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const CuisinierSchema = new Schema({
    _id:{
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
        type:  String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    avatar: {
        type: String
    },
   specialite: {
        type:  String,
    },
    
    date: {
        type: Date,
        default: Date.now
    }
});

const Produit = mongoose.model('cuisinier', CuisinierSchema);

module.exports = Produit;