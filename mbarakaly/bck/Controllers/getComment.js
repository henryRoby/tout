   
var Comment = require('../Models/commentaire');
    exports.getComment = (req, res) => {
        Comment.find()
        .then(note => {
            var comm = []
            //console.log('tab: ', comm)
            for(let i=0;i<note.length;i++){
                if(note[i].idarticle==req.params.id){
                    comm.push(note[i])
                }
            }
            res.send(comm)
            
        }).catch(err => {
            if(err.kind === 'ObjectId') {
                return res.status(404).send({
                    message: "Note not found with id " + req.params.id
                });                
            }
            return res.status(500).send({
                message: "Error retrieving note with id " + req.params.id
            });
        });
    };