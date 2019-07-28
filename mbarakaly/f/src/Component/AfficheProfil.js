
import React, { Component } from 'react';
import axios from 'axios';


export default class AfficheProfil extends Component {

  constructor(props) {
    super(props);
    this.state = { profil: [] };

  }
  componentDidMount() {
    axios.get('http://localhost:8080' + this.props.location.pathname)
      .then(response => {
        console.log('i am a response', response)
        this.setState({ id: response.data._id });
        this.setState({ nam: response.data.nom });
        console.log('i am a response', response.data.email)
        this.setState({ mail: response.data.email });
        this.setState({ mdp: response.data.password });
        this.setState({ photo: response.data.photo_profil });
      })
      .catch(function (error) {
        console.log(error);
      })
  }

  liste() {
      return(
          <div className="table-responsive">
            <table className="table">
              <thead>
                <tr>
                  <h2>profil</h2>
                </tr>
                <tr>
                  <th>ID</th>
                  <th>NOM</th>
                  <th>EMAIL</th>
                  <th>PASSWORD</th>
                  <th>PHOTO</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{this.state.id}</td>
                  <td>{this.state.nam}</td>
                  <td>{this.state.mail}</td>
                  <td>{this.state.mdp}</td>
                  <td><img  alt="pdp" width="50px" height="50px" src={'http://localhost:8080/user/'+this.state.photo}/></td>
                </tr>
              </tbody>
            </table>
          </div>
      )

  }
  render() {
    return (
      <div>
        {this.liste()}
      </div>
    );
  }
}