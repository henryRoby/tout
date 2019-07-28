import React from 'react';
import "./ajoutProd.css"

class NewProduct extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      nom: '',
      prix: '',
      description: '',
      image: ''

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
    data.append('image', this.uploadInput.files[0]);
    data.append('nom', this.state.nom);
    data.append('prix', this.state.prix);
    data.append('description', this.state.description)

    fetch('http://localhost:8080/user/produit', {
      method: 'POST',
      body: data,
    }).then((response) => {
      response.json().then((body) => {
        this.setState({ image: `http://localhost:8080/user/produit/${body.image}` });
        console.log('ity ilay body.image', body.image);

      });
    });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleUploadImage} className="md-form">
          <div className="form-group mx-sm-3 mb-2">
            <div className="row">
              <div className="col-xs-2"></div>
              <div className="col-xs-8">
                <input className="form-control" type="text"
                  value={this.state.value}
                  onChange={this.onChange}
                  name="nom" placeholder="Nom" />
              </div>

              <div className="col-xs-2"></div>
            </div>
            <br />
            <div className="row">
              <div className="col-xs-2"></div>
              <div className="col-xs-8">
                <input className="form-control" type="text"
                  value={this.state.value}
                  onChange={this.onChange}
                  name="prix" placeholder="Prix" />
              </div>

              <div className="col-xs-2"></div>
            </div>
            <br />
            <div className="row">
              <div className="col-xs-2"></div>
              <div className="col-xs-8">
                <input className="form-control" type="text"
                  value={this.state.value}
                  onChange={this.onChange}
                  name="description" placeholder="Description" />
              </div>

              <div className="col-xs-2"></div>
            </div>
            <br />
            
            <div className="row">
              <div className="col-md-4">
                <label id="file">Image
                <input ref={(ref) => { this.uploadInput = ref; }} type="file" name="image" />
                </label>
              </div>
              <div className="col-md-8">
                <button id="validate" className="btn btn-info">Publier</button>
              </div>
            </div>
          </div>
        </form>
      </div>

    );
  }
}

export default NewProduct;
