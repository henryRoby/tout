import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import NouvProd from './components/NouvProd/ajoutProd'
import { Dashboard } from './components/Dashboard/Dashboard.js';
import { Login } from './components/Login/Login.js';
import { Signup } from './components/Signup/Signup.js';
import { PrivateRoute } from './components/PrivateRoute.js';
import Navbar from './components/Navbar';
import Affichage from './components/ListeCard/Affichage';
import './App.css';

class App extends Component {
        render() {
        return (
        <div className="App">
            <div className="App-content">
            <Navbar/>
                <Switch>  
                    <Route  path ="/produit" component={NouvProd}/>
                    <Route  path="/login" component={Login}/>
                    <Route  path ="/signup" component={Signup}/>
                    <Route  path ="/produits" component={Affichage}/>
                    <PrivateRoute path='/dashboard' component={Dashboard} />
                </Switch>
            </div>
        </div>
        );
    }
}
export default App;
