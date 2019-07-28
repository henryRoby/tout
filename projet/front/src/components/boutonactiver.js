import React, { Component } from 'react'
export default class Activer extends Component {
 
    render() {
        
        return (
            
      <div>
    <button onClick={()=>this.props.handleActive()}>Activer</button>
   
      </div>
              
            
        )
    }
}