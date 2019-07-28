
var Comment = require('../Models/commentaire');
module.exports.PosteComment = function(req,res) {
   
    
    var comment = req.body.comment
    var idarticle = req.body.idarticle
    var idenvoyeur = req.body.idenvoyeur
    
     
     Comment.find()
            .then(note0 => {
                if(note0.length==0) {
                    id = 0;
                    console.log('mbola',id);
                    
                }else{
                    id = parseInt(note0[note0.length-1].id)+1;
                }

            const insert = new Comment({_id:id,comment:comment,idarticle:idarticle,idenvoyeur:idenvoyeur});
            (!comment || !idarticle || !idenvoyeur)? console.log("non reussi"):insert.save()
                .then(()=>{
                    Comment.find()
                        .then(note=>{
                            res.send(note);
                        })
                })
                .catch(e=>{
                    res.status(500).send({mes:e.mes || "erreur"})
                })
            })
    }

