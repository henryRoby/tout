import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from "react-router-dom";

// import PostFrontToBack from './Component/postWithUpload_frontToBack';
import ListTous from './Component/ListTous'
 class App extends Component {
  render() {
    return (
      <Router>
      <div className="container">
        {/* <Route path="/" exact component={PostFrontToBack} /> */}
        <Route path="/profil" exact component={ListTous} />
        {/* <Route path="/profil/:profilId" exact component={AfficheProfil} /> */}
      </div>
    </Router>     
    )
  }
}
export default App;