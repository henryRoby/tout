import React, { Component } from 'react'
import axios from 'axios';
import { Redirect } from 'react-router-dom'
import { Link , withRouter} from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { logoutUser } from'../actions/authentificate';
import Activer from "./boutonactiver"
import Desactiver from "./boutondesactiver"
 class Profil extends Component {
    constructor(props) {
        super(props);

        this.state = {
            nom:"",
            titre:"",
            description:"",
            horaire:"",
            duree:"",
            placedispo:0,
            placereserve:0,
            prix:0,
            image: '',
            redirect:false,
            atelier:[],
            name:"",
            visibilite:false
        };

        this.handleUploadImage = this.handleUploadImage.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleActive = this.handleActive.bind(this);
        this.handleDesactive = this.handleDesactive.bind(this);
    }
    handleActive(){
        this.setState({visibilite:true})
    }
    handleDesactive(){
        this.setState({visibilite:false})
    }
    setRedirect = () => {
        this.setState({
          redirect: true
        })
      }
      renderRedirect = () => {
        if (this.state.redirect) {
          return <Redirect to='/' />
        }
      }
    
    handleChange(e){
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleUploadImage(ev) {
        ev.preventDefault();

        const data = new FormData();
        data.append('image', this.uploadInput.files[0]);
        data.append('titre', this.state.titre);
        data.append('description', this.state.description);
        data.append('date', this.state.date);
        data.append('horaire', this.state.horaire);
        
        data.append('placedispo', this.state.placedispo);
        data.append('placereserve', this.state.placereserve);
        data.append('prix', this.state.prix);
        data.append('duree',  this.state.duree);
        
                                                                                                                                                              
        fetch('http://localhost:8080/cuisinier/'+ localStorage.getItem('id'), {
            method: 'POST',
            body: data,
        }).then((response) => {
            response.json().then((body) => {
             
                console.log(body.file1)
                //  this.setRedirect()
                axios.get('http://localhost:8080/cuisinier/'+ localStorage.getItem('id')).then(res=>{
            console.log(res.data)
            this.setState({atelier:res.data})
        })
            });
        });
       
    }

    componentDidMount(){
      
        this.setState({name:localStorage.getItem('jwtToken')})
        console.log(localStorage.getItem('jwtToken'))
        axios.get('http://localhost:8080/cuisinier/'+ localStorage.getItem('id')).then(res=>{
            console.log(res.data)
            this.setState({atelier:res.data})
        })

    }
    render() {
       
        return (
           
            <div>
                <div id ="entete">
                    <div>
                        <center>
                            <h3> Bienvenue {this.state.name}</h3> <br></br>
                        </center>
                    </div>
                    <div id="deconnecte">
                        <button onClick={()=>{
                              this.props.logoutUser(this.props.history);
                        }}>deconnecter</button>
                    </div>
                </div>
               
                
                 
  <div class="d-flex justify-content-center h-100">
                <form onSubmit={this.handleUploadImage
                
                }>
                {this.renderRedirect()}
                <div class="input-group form-group">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text"><i class="fas fa-user"></i></span>
                                    </div>
                                    <input type="text" class="form-control"  name="titre" placeholder="titre"  onChange={ this.handleChange }
                    value={ this.state.titre } required/>

                                </div>
                                <div class="input-group form-group">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text"><i class="fas fa-user"></i></span>
                                    </div>
                                    <input type="text" class="form-control"  name="description" placeholder="description" onChange={ this.handleChange }
                    value={ this.state.description } required/>

                                </div>
                                <div class="input-group form-group">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text"><i class="fas fa-user"></i></span>
                                    </div>
                                    <input type="date" class="form-control"  name="date" placeholder="date" onChange={ this.handleChange }
                    value={ this.state.date } required/>

                                </div>
                                {/* <div class="input-group form-group"> */}
                                    {/* <div class="input-group-prepend">
                                        <span class="input-group-text"><i class="fas fa-user"></i></span>
                                    </div>
                                    <input type="text" class="form-control"  name="duree" placeholder="duree" onChange={ this.handleChange }
                    value={ this.state.duree }/>

                                </div> */}
                                <div class="input-group form-group">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text"><i class="fas fa-user"></i></span>
                                    </div>
                                    <input type="text" class="form-control"  name="horaire" placeholder="horaire" onChange={ this.handleChange }
                    value={ this.state.horaire } required/>

                                </div>
                                <div class="input-group form-group">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text"><i class="fas fa-user"></i></span>
                                    </div>
                                    <input type="Number" class="form-control"  name="placedispo" placeholder="placedispo" onChange={ this.handleChange }
                    value={ this.state.placedispo } required/>

                                </div>
                                <div class="input-group form-group">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text"><i class="fas fa-user"></i></span>
                                    </div>
                                    <input type="Number" class="form-control"  name="placereserve" placeholder="placereserve" onChange={ this.handleChange }
                    value={ this.state.placereserve } required/>

                                </div>
                                <div class="input-group form-group">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text"><i class="fas fa-user"></i></span>
                                    </div>
                                    <input type="Number" class="form-control"  name="prix" placeholder="prix" onChange={ this.handleChange }
                    value={ this.state.prix } required/>

                                </div>
                                
                                <div class="input-group form-group">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text"><i class="fas fa-user"></i></span>
                                    </div>
                                    <input ref={(ref) => { this.uploadInput = ref; }} type="file" required/>
                                </div>
                                
                                

                    <div>
                        <button>Upload</button><br></br>
                        
                    </div>
                    
                   
                </form>

            </div>
            {this.state.atelier.length>0 ?(this.state.atelier.map(prof=>{
                var url="http://localhost:8080/public/"+prof.image
 return (
    <div className="row"> 
       <div className="col-md-4">
       <div class="card-body">
             <img   id ="image" src={url}/>
             <h5 class="card-title">{prof.titre}</h5>
             <p class="card-text">{prof.description}</p>
             <p class="card-text">{prof.date}</p>
             <p class="card-text">{prof.horaire}</p>
             <p class="card-text">{prof.placedispo}</p>
             <p class="card-text">{prof.placereserve}</p>
             <a href="#" >{prof.prix}</a><br></br>
            <div>
            {this.state.visibilite ? (<div>
    <button onClick={(e)=>{
        e.preventDefault()
         axios.get("http://localhost:8080/ateliermasquer/"+prof._id).then(res=>console.log(res.data)
         )
         this.handleDesactive()
        }}>Desactiver</button>
   
      </div>):(<div>
    <button onClick={(e)=>{
        e.preventDefault()
        axios.get("http://localhost:8080/atelieraffichier/"+prof._id).then(res=>console.log(res.data)
        )
        this.handleActive()
        }}>Activer</button>
   
      </div>)}  
             </div>
       
         </div>
       </div>
         
     </div>
)
            }
        
              )):""}
            
           
            </div>
         
        )
    }
}
Profil.propTypes = {
    logoutUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    auth: state.auth
})

export default connect(mapStateToProps, { logoutUser })(withRouter(Profil));