
const Profile = require('../Models/tchat');
//const bcrypt = require('bcryptjs')
const fs = require('fs');

exports.create = (req, res) => {
    if(!req.body.message) {
        
        console.log('console.log 2 '+req.body.message);
        
        
        return res.status(400).send({
            message: "profil content can not be empty"
            
        });
    }
    
    Profile.find()
    .then(user => {
        //autoincrement
        let idautom;
        if(user.length == 0){
            idautom = 0
        }else {
            idautom = parseInt(user[user.length - 1]._id) + 1
        }
    const profil = new Profile({   
             
        _id: idautom,
        message: req.body.message,
        idreceveur:req.body.idreceveur,
        idenvoyeur:req.body.idenvoyeur
 
    });

    
    profil.save()
    .then(() => {
        Profile.find()
        .then(data=>{
            res.send(data);
            console.log(data);
            
        })
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Something wrong while creating the profil."
            
        });
    });
})
};

exports.findAll = (req, res) => {   
    Profile.find()
    .then(users => {    
        res.send(users);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Something wrong while retrieving profils."
        });
    });
};


// Find a single profil with a profilId
exports.findOne = (req, res) => {
    var a=parseInt(req.params.profilId)
    Profile.find()
    .then(profilchoix => {
        console.log(profilchoix,req.params.profilId) 
        var tab=[]
        for(let i=0;i<profilchoix.length;i++){
            if(profilchoix[i].idreceveur==req.params.profilId) {
                tab.push(profilchoix[i])
                }
            else if(profilchoix[i].idenvoyeur==req.params.profilId)    
                {
                    tab.push(profilchoix[i])
                    };       
            }
            res.send(tab);   
        })
      .catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "profil not found with id " + req.params.profilId
            });                
        }
        return res.status(500).send({
            message: "Something wrong retrieving profil with id " + req.params.profilId
        });
    });
};