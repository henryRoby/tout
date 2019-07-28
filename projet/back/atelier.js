const Validator = require('validator');
const isEmpty = require('./isEmpty');

module.exports = function validateRegisterInput2(data) {
    let errors = {};
   
    data.titre = !isEmpty(data.titre) ? data.titre : '';
    data.description = !isEmpty(data.description) ? data.description : '';
    data.date = !isEmpty(data.date) ? data.date : '';
    data.horaire = !isEmpty(data.horaire) ? data.horaire : '';
    data. duree = !isEmpty(data. duree) ? data. duree : '';
    data.placedispo = !isEmpty(data.placedispo) ? data.placedispo : '';
    data.placereserve = !isEmpty(data.placereserve) ? data.placereserve : '';
    data.prix = !isEmpty(data.prix) ? data.prix : '';
    data.image = !isEmpty(data.image) ? data.image : '';
    

  
    if(Validator.isEmpty(data.titre)) {
        errors.titre = 'titre field is required';
    }
    if(Validator.isEmpty(data.description)) {
        errors.description = 'prenom field is required';
    }
    if(Validator.isEmpty(data.date)) {
        errors.date = 'date field is required';
    }
    if(Validator.isEmpty(data.duree)) {
        errors.duree = 'duree field is required';
    }
    if(Validator.isEmpty(data.placedispo)) {
        errors.placedispo = 'placedispo field is required';
    }
    if(Validator.isEmpty(data.placereserve)) {
        errors.placereserve = 'prenom field is required';
    }
    if(Validator.isEmpty(data.prix)) {
        errors.prix = 'prix field is required';
    }
    if(Validator.isEmpty(data.image)) {
        errors.image = 'image field is required';
    }

 

    return {
        errors,
        isValid: isEmpty(errors)
    }
}