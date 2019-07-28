import React, { Component } from 'react';
import axios from 'axios';

export default class Edit extends Component {
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

  componentDidMount() {
      axios.get('https://localhost:8080/editer/:id'+this.props.match.params.id)
          .then(response => {
              this.setState({ 
                nom: response.data.nom, 
                prenom: response.data.prenom,
                age: response.data.age });
          })
          .catch(function (error) {
              console.log(error);
          })
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
      
    };
    axios.post('https://localhost:8080/:id/'+this.props.match.params.id, obj)
        .then(res => console.log(res.data));
    
    this.props.history.push('/lister');
  }
 
  render() {
    return (
        <div style={{ marginTop: 10 }}>
            <h3 align="center">Modifier</h3>
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
                    <label>Prenom: </label>
                    <input type="text" 
                      className="form-control"
                      value={this.state.prenom}
                      onChange={this.onChangeBusinessName}
                      />
                </div>
                
                <div className="form-group">
                    <input type="submit" 
                      value="Modifier utilisateur" 
                      className="btn btn-primary"/>
                </div>
            </form>
        </div>
    )
  }
}