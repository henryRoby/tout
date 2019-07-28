import React, { Component } from 'react'
import './acceuil.css'
import axios from 'axios';
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css
// import Modal from './modal';
export default class Acceuil extends Component {
    constructor(props) {
        super(props);
  
        this.state = {
            profil: [],
            nom:"",
            prenom:"",
            email:"",
            telephone:""
        };
        this.handleChange = this.handleChange.bind(this);
  
    }
    componentDidMount() {
        
        axios.get("http://localhost:8080/atelier").then(res => {
           
            this.setState({ profil: res.data })
            console.log(this.state.profil)
  
        })
    }
    handleChange(e){
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    render() {
        
        return (
            
              <div className="container">
    {this.state.profil.length>0 ?(this.state.profil.filter(pro=>pro.visibilite==true).map(prof=>{
         var url="http://localhost:8080/public/"+prof.image
      return(
      <div id="image"className="row"> 
   <div className="col-md-4"> 
      <div class="card-body">
             <img id ="image"src={url}/>
                {/* <Modal /> */}
             <h5 class="card-title">{prof.titre}</h5>
             <p class="card-text">{prof.description}</p>
             <p class="card-text">{prof.date}</p>
             <p class="card-text">{prof.horaire}</p>
             <p class="card-text">{prof.placedispo}</p>
             <p class="card-text">{prof.placereserve}</p>
             <a href="#" >{prof.prix}</a><br></br>
             <button class="btn btn-primary" onClick={()=>{
                //  axios.post("http://localhost:8080/particulier/"+prof._id)
                confirmAlert({
                    customUI: ({ onClose }) => {
                      return (
                        <div  className='custom-ui'>
                          <div id="insription">
                          <h4>Inscription pour l 'Atelier {prof.titre}</h4>
                        <input  name="nom" onChange={ this.handleChange } value={this.state.value} placeholder="Entrer votre  nom"/><br></br>
                        <input name="prenom" placeholder="Entrer votre  prenom"onChange={ this.handleChange } value={this.state.value}/><br></br>
                        <input name="email" placeholder="Entrer votre  email"onChange={ this.handleChange } value={this.state.value}/><br></br>
                         <input name="telephone"  placeholder="Entrer votre numero telephone" onChange={ this.handleChange } value={this.state.value}/><br></br>
                          <button onClick={onClose}>No</button>
                          <button
                            onClick={() => {
                                axios.post("http://localhost:8080/particulier/"+prof._id,{
                                    nom:this.state.nom,
                                    prenom:this.state.prenom,
                                    email:this.state.email,
                                    telephone:this.state.telephone
                                }).then(res=>{console.log(res.data);
                                  axios.get("http://localhost:8080/atelier").then(res => {
           
            this.setState({ profil: res.data })
            console.log(this.state.profil)
  
        })
                                })

                              onClose();
                            }}
                          >
                            Yes, Delete it!
                          </button>
                          </div>
                       
                        </div>
                      );
                    }
                  });
                 }} >S'inscrire</button>
         </div></div > 
      
     </div>
      )})):""} 
    </div>
              
            
        )
    }
}
