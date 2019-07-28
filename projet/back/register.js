const Validator = require('validator');
const isEmpty = require('./isEmpty');

module.exports = function validateRegisterInput(data) {
    let errors = {};
    data.nom = !isEmpty(data.nom) ? data.nom : '';
    data.prenom = !isEmpty(data.prenom) ? data.prenom : '';
    data.email = !isEmpty(data.email) ? data.email : '';
    data.titre = !isEmpty(data.titre) ? data.titre : '';
    data.description = !isEmpty(data.description) ? data.description : '';
    data.date = !isEmpty(data.date) ? data.date : '';
    data.horaire = !isEmpty(data.horaire) ? data.horaire : '';
    data. duree = !isEmpty(data. duree) ? data. duree : '';
    data.placedispo = !isEmpty(data.placedispo) ? data.placedispo : '';
    data.placereserve = !isEmpty(data.placereserve) ? data.placereserve : '';
    data.prix = !isEmpty(data.prix) ? data.prix : '';
    data.image = !isEmpty(data.image) ? data.image : '';
    data.password = !isEmpty(data.password) ? data.password : '';
    data.password_confirm = !isEmpty(data.password_confirm) ? data.password_confirm : '';

    if(!Validator.isLength(data.nom, { min: 2, max: 30 })) {
        errors.nom = 'Name must be between 2 to 30 chars';
    }
    
    if(Validator.isEmpty(data.nom)) {
        errors.nom = 'nom field is required';
    }
    if(!Validator.isLength(data.prenom, { min: 2, max: 30 })) {
        errors.prenom = 'prenom must be between 2 to 30 chars';
    }
    
    if(Validator.isEmpty(data.prenom)) {
        errors.prenom = 'prenom field is required';
    }
   

    if(!Validator.isEmail(data.email)) {
        errors.email = 'Email is invalid';
    }

    if(Validator.isEmpty(data.email)) {
        errors.email = 'Email is required';
    }

    if(!Validator.isLength(data.password, {min: 6, max: 30})) {
        errors.password = 'Password must have 6 chars';
    }

    if(Validator.isEmpty(data.password)) {
        errors.password = 'Password is required';
    }

    if(!Validator.isLength(data.password_confirm, {min: 6, max: 30})) {
        errors.password_confirm = 'Password must have 6 chars';
    }

    if(!Validator.equals(data.password, data.password_confirm)) {
        errors.password_confirm = 'Password and Confirm Password must match';
    }

    if(Validator.isEmpty(data.password_confirm)) {
        errors.password_confirm = 'Password is required';
    }

    return {
        errors,
        isValid: isEmpty(errors)
    }
}