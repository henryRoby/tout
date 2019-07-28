import React, { Component } from 'react';
import axios from 'axios';

export default class Create extends Component {
  constructor(props) {
    super(props);
    this.onChangePersonName = this.onChangePersonName.bind(this);
    this.onChangeBusinessName = this.onChangeBusinessName.bind(this);
    this.onChangeGstNumber = this.onChangeGstNumber.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      nom: '',
      prenom: '',
     
    }
  }
  onChangePersonName(e) {
    this.setState({
      nom: e.target.value
    });
  }
  onChangeBusinessName(e) {
    this.setState({
      prenom: e.target.value
    })  
  }
  onChangeGstNumber(e) {
    this.setState({
      age: e.target.value
    })
  }

  onSubmit(e) {
    e.preventDefault();
    const obj = {
      nom: this.state.nom,
      prenom: this.state.prenom,
      age: this.state.age
    };
    axios.post('https://localhost:8080', obj)
        .then(res => console.log(res.data));
    
    this.setState({
      nom: '',
      prenom: '',
      age: ''
    })
  }
 
  render() {
    return (
        <div style={{ marginTop: 10 }}>
            <h3 align="center">welcome</h3>
            <form onSubmit={this.onSubmit}>
                <div className="form-group">
                   <label>Nom:  </label>
                    <input 
                      type="text" 
                      className="form-control" 
                      value={this.state.nom}
                      onChange={this.onChangePersonName}
                      />
                </div>
                <div className="form-group">
                    <label>Prénom: </label>
                    <input type="text" 
                      className="form-control"
                      value={this.state.prenom}
                      onChange={this.onChangeBusinessName}
                      />
                </div>
                
                <div className="form-group">
                    <input type="submit" 
                      value="Enregistrer" 
                      className="btn btn-primary"/>
                </div>
            </form>
        </div>
    )
  }
}