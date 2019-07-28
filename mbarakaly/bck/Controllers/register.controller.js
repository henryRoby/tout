const Register = require('../Models/profil.js');
var bcrypt = require('bcryptjs');
var salt = bcrypt.genSaltSync(10);

exports.creerRegister = (req, res) => {

    if (!req.body.nom) {
        return res.status(400).send({
            message: "le contenu ne peut pas être vide"
        });
    }
    var id;
    Register.find()
        .then( test => {
    if (test.length == 0) {
        id = 0;
    } else {
        id = parseInt(test[test.length - 1].id) + 1
    }

    // Pour Hasher le mot de passe 
    var hash = bcrypt.hashSync(req.body.password, salt);

    const register = new Register({
        _id: id,
        nom: req.body.nom,
        email: req.body.email,
        password: hash,
        TypeProuct: req.body.TypeProuct,
    });

    register.save()
        .then(data => {
            res.send(data);
            console.log(data);    
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Une erreur s'est produite lors de la création du profil."
            });
        });

    })
};


exports.findAll = (req, res) => {
    Register.find()
        .then(notes => {
            res.send(notes);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Une erreur est survenue lors de la récupération des notes."
            });
        });
};
//miverifier hoe === le password na tsy
exports.login = (req, res) => {
    Register.find() 
        .then(user =>{
            const login = new Register({
                nom: req.body.nom,
                email: req.body.email,
                password: req.body.password
            });
                var r = false;
            for(let i = 0; i<user.length; i++){
                if((user[i].nom == login.nom || user[i].email == login.email) && bcrypt.compareSync(req.body.password, user[i].password)){
                    r = true;
                    res.send('Bienvenue sur l\'administrateur , merci d\'avoir coffience ,' )
                }
            }
            if(!r){
                res.send('(nom ou email) ou mot de passe incorrect')
            }

        })
  };

//enregistrement du produit
  exports.login = (req, res) => {
    Register.find() 
        .then(user =>{
            const login = new Register({
                titreProd: req.body.titreProd,
                descriptionPro: req.body.descriptionPro,
                prixProd: req.body.prixProd
            });
                var r = false;
            for(let i = 0; i<user.length; i++){
                if((user[i].titreProd == login.titreProd || descriptionPro == login.descriptionPro) && bcrypt.compareSync(req.body.prixProd, prixProd)){
                    r = true;
                    res.send('Bienvenue sur l\'administrateur , merci d\'avoir coffience ,' )
                }
            }
            if(!r){
                res.send('(nom ou email) ou mot de passe incorrect')
            }

        })
  };


