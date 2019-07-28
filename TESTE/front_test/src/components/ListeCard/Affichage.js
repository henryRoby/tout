import React, { Component } from 'react';
import axios from 'axios';
import "./Affichage.css"


export default class Affichage extends Component {

    constructor(props) {
        super(props);
        this.state = { produit: [] };

    }
    componentDidMount() {
        axios.get('http://localhost:8080/user/produit/')
            .then(response => {
                console.log('i am a response', response)
                this.setState({ produit: response.data });
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    liste() {
        return <div className='container'>
               <div className="row">
                   {(this.state.produit.length > 0) ? (this.state.produit.map((obj) => {
                        return <div >
                                  <div className="col-md-12 card" key={obj._id}>
                                        <div className="card">
                                             <img  src={'http://localhost:8080/user/produitImage/' + obj.image} alt="pdp" />
                                        </div>
                                             <div className="card-body">

                                                    <center>
                                                        <h4>{obj.nom}</h4>
                                                        <p>{obj.prix} Ar</p>
                                                    </center>
                                                    <p>{obj.description}</p>
                                            </div>
                                            <div className="container-fluid">
                                                <div className="row">
                                                    <div className="col-xs-6">
                                                        <button class="btn btn-light"><span class="fas fa-cart-plus"></span></button>
                                                    </div>
                                                    <div className="col-xs-6">
                                                        <button id="detay" class="btn btn-info" onClick={() => {
                                                            return (
                                                                <div className="row">
                                                                    <div className="col-md-6">
                                                                        <img width="500px" height="450" src={'http://localhost:8080/user/produitImage/' + obj.image} alt="pdp" />
                                                                    </div>
                                                                </div>
                                                            )
                                                        }}><span class="far fa-file-alt"></span>Detail</button>
                                                    </div>
                                                </div>
                                            </div>

                                    </div>
                                 </div>
 
                    })) : ('')
                }

            </div>
        </div>
    }
    render() {
        return (
            <div>
                {this.liste()}
            </div>
            );
        }
}