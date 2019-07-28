
import React from 'react';

class PostFrontToBack extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
     nom: '',
     email:'',
      password:'',
      photo_profil:''

    };
    this.onChange = this.onChange.bind(this)
    this.handleUploadImage = this.handleUploadImage.bind(this);
  }




  onChange(event) {
    this.setState({
        [event.target.name]: event.target.value
    })
}





  handleUploadImage(ev) {
    ev.preventDefault();

    const data = new FormData();
    data.append('photo_profil', this.uploadInput.files[0]);
    data.append('nom',this.state.nom);
    data.append('email',this.state.email);
    data.append('password',this.state.password)

    fetch('http://localhost:8080/profil', {
      method: 'POST',
      body: data,
    }).then((response) => {
      response.json().then((body) => {
        this.setState({ photo_profil: `http://localhost:8080/profil/${body.photo_profil}` });
        console.log('ity ilay body.fil',body.photo_profil);
        
      });
    });
  }

  render() {
    return (
      <form onSubmit={this.handleUploadImage}>
        <label>Nom:</label>
        <input type="text"
          value={this.state.value}
          onChange={this.onChange}
          name="nom" /><br></br>
          <label>email:</label>
        <input type="email"
          value={this.state.value}
          onChange={this.onChange}
          name="email" /><br></br>
        <label>passeword:</label>
        <input type="password"
          value={this.state.value}
          onChange={this.onChange}
          name="password" /><br></br>       
      
          <input ref={(ref) => { this.uploadInput = ref; }} type="file" name="photo_profil"/>
       
          <button>Ajouter</button>
      </form>
    );
  }
}

export default PostFrontToBack;
