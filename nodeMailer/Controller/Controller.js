const Profil = require('../Modele/Profil.modele');
var nodemailer = require('nodemailer');

const express = require('express');
const app = express.Router();

const zoho = require('@trifoia/zcrmsdk');

const config = require('./zoho.config');

exports.postProfil = (req, res) => {
    // Validate request
    console.log(req.body.nom);
    

    Profil.find()
        .then(prof => {
            var id2;
            if (prof.length == 0) {
                id2 = 0
            }
            else {

                id2 = parseInt(prof[prof.length - 1].id) + 1
            }
            
           
            const prf = new Profil({
                _id: id2,
                nom: req.body.nom || "Untitled Note",
                email: req.body.email
                
            }); 

            if( req.body.nom && req.body.email){

                prf.save().then((data)=>{
                 prof.push(prf)
                res.send(prof)})
            }


//NODEMAILER
            var transporter = nodemailer.createTransport({
                service: 'gmail',
                auth: {
                  user: 'razanabelahyhenri@gmail.com',
                  pass: 'R.Henrygasy1997'
                }
              });
              
              var mailOptions = {
                from: 'razanabelahyhenri@gmail.com',
                to: 'sandra.laza4@gmail.com',
                subject: 'Exercice1',
                text: 'Bonjour, t"as fini'
              };
              
              transporter.sendMail(mailOptions, function(error, info){
                if (error) {
                  console.log(error);
                } else {
                  console.log('Email sent: ' + info.response);
                }
              });

         })

    }



  //  ZOHO_CRM
  app . get ( ' / contact ' , ( req , res , next ) => {
    zoho . initialiser (config). then (( client ) => {
        client . API . MODULES . get ({
            module :  ' Contacts ' ,
            // params : {
            //     page :  0 ,
            //     per_page :  25 ,
            // },
        }). alors (( réponse ) => {
            res . json ( JSON . analyser ( réponse . corps ));
        }). attraper (suivant);
    }). attraper (suivant);
});


exports.getProfil = (req, res) => {

    Profil.find()
        .then(prof => {

            res.send(prof);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving notes."
            });
        });
};
/*

exports.put = (req, res) => {

    // Find note and update it with the request body
    Profil.findByIdAndUpdate(req.body._id, {
        nom: req.body.nom || "Untitled Note",
        email: req.body.email
    }, { new: true })
        .then(note => {
            if (!note) {
                return res.status(404).send({
                    message: "Note not found with id " + req.body._id
                });
            }
            res.send(note);
        }).catch(err => {
            if (err.kind === 'ObjectId') {
                return res.status(404).send({
                    message: "Note not found with id " + req.params.noteId
                });
            }
            return res.status(500).send({
                message: "Error updating note with id " + req.params.noteId
            });
        });
};

exports.deleteProfil = (req, res) => {
    Profil.findByIdAndRemove(req.params._id)
        .then(prof => {
            if (!prof) {
                return res.status(404).send({
                    message: "Note not found with id " + req.params._id
                });
            }
            res.send({ message: "Note deleted successfully!" });
        }).catch(err => {
            if (err.kind === 'ObjectId' || err.name === 'NotFound') {
                return res.status(404).send({
                    message: "Note not found with id " + req.params._id
                });
            }
            return res.status(500).send({
                message: "Could not delete note with id " + req.body._id
            });
        });
};
exports.findOne = (req, res) => {
    const tab = []
    
    Profil.findById(req.params._id)
        .then(eleve => {
            if (!eleve) {
                return res.status(404).send({
                    message: "Note not found with id " + req.body._id
                });
            }

            Profil.find()
                .then(prof => {
                    tab.push(eleve)
                   


                    res.send(tab)
                }
                )
            })

        .catch(err => {
            if (err.kind === 'ObjectId') {
                return res.status(404).send({
                    message: "Note not found with id " + req.body._id
                });
            }
            return res.status(500).send({
                message: "Error retrieving note with id " + req.body._id
            });
        });
};

*/