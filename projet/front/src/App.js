import React, { Component } from 'react';
import logo from './logo.svg';

import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle.js'
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import Login from './components/login'
import Profil from './components/Profil'
// import Produit from './components/produit'
// import Panier from './Panier'
import Acceuil from './components/Acceuil'

import Register from './components/register'
import { Provider } from 'react-redux';
// import setAuthToken from './setAuthToken';
// import { setCurrentUser } from './actions/authenticate';
// import jwt_decode from 'jwt-decode';
import store from './store';
// if(localStorage.jwtToken) {
//   setAuthToken(localStorage.jwtToken);
//   const decoded = jwt_decode(localStorage.jwtToken);
//   store.dispatch(setCurrentUser(decoded));

//   const currentTime = Date.now() / 1000;
//   if(decoded.exp < currentTime) {
//     store.dispatch(logoutUser());
//     window.location.href = '/login'
//   } 
// }
  class App extends Component {
   
    render(){
      return (
        <div>
          <Provider store = { store }>
          <Router>
            <nav id="navbar"class="navbar navbar-expand-lg navbar-light bg-light">
              <a class="navbar-brand" href="#"></a>
              <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
    
              <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto">
                  <li class="nav-item active">
                    <a class="nav-link" href="#"><Link to="/">Home</Link> <span class="sr-only">(current)</span></a>
                  </li>
                </ul>
               
              </div>
            </nav>
           
            <Route path="/"  exact component={Acceuil} />
             {/* <Route path="/"  exact component={Footer} /> */}
            <Route path="/login"  component={Login} />
            { <Route path="/register" exact component={Register} /> }
            <Route path="/profil" component={Profil} />
             {/* <Route path="/" exact component={Produit} />
             <Route path="/panier" exact component={Panier} /> */}

  {/* <Produit/> */}
          </Router>
    
          </Provider>
          
    
    
        </div>
    
    
      );
    }
  
}


export default App;
