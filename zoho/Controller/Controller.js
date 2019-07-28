const Profil = require('../Modele/Profil.modele');
//var nodemailer = require('nodemailer');

const express = require('express');
const app = express.Router();

const zoho = require('@trifoia/zcrmsdk');

const config = require('../zoho.config');




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
            // var transporter = nodemailer.createTransport({
            //     service: 'gmail',
            //     auth: {
            //       user: 'razanabelahyhenri@gmail.com',
            //       pass: 'R.Henrygasy1997'
            //     }
            //   });
              
            //   var mailOptions = {
            //     from: 'razanabelahyhenri@gmail.com',
            //     to: 'sandra.laza4@gmail.com',
            //     subject: 'Exercice1',
            //     text: 'Bonjour, t"as fini'
            //   };
              
        //       transporter.sendMail(mailOptions, function(error, info){
        //         if (error) {
        //           console.log(error);
        //         } else {
        //           console.log('Email sent: ' + info.response);
        //         }
        //       });

          })

    }



  //  ZOHO_CRM
  exports.getContact= (req, res, next) => {
    zoho.initialize(config).then((client) => {
        client.API.MODULES.get({
            module: 'Contacts',
            params: {
                page: 1,
                per_page: 200,
            },
        }).then((response) => {
            res.json(JSON.parse(response.body));
        }).catch(next);
    }).catch(next);
};


// exports.postContact =(req, res, next) => {
//     zoho.initialize(config).then((client) => {
//         client.API.MODULES.post({
//             module: 'Contact',
//             body: {
//                 // Pay ATTENTION! Data is an array!
//                 data: [
//                   {
//                     Name: req.body.Name,
//                     Email: req.body.email,
//                     Mobile: req.body.mobile,
//                   }
//                 ],
//             },
//         }).then((data) => {
//             const { data } = JSON.parse(response.body);

//             res.json({ data });
//         });
//     });
// };



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


