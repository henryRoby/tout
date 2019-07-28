import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import Create from './components/create.component';
import Edit from './components/edit.component';
import Index from './components/index.component';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
        <div class="container-fluid">
         <div class="navbar-header">
          <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <Link to={'/'} className="navbar-brand">React Front Test</Link>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                  <Link to={'/'} className="nav-link">Acceuil</Link>
                </li>
                <li className="nav-item">
                  <Link to={'/add'} className="nav-link">Créer utilisateurs</Link>
                </li>
                <li className="nav-item">
                  <Link to={'/indexer'} className="nav-link">Liste d'utilisateurs</Link>
                </li>
              </ul>
            </div>
          </nav>
          <Switch>
              <Route exact path='/add' component={ Create } />
              <Route path='/editer/:id' component={ Edit } />
              <Route path='/indexer' component={ Index } />
          </Switch>
          </div>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
