import React, { Component } from 'react'
export default class Desactiver extends Component {
 
    render() {
        
        return (
            
      <div>
    <button onClick={()=>this.props.handleDesactive()}>Desactiver</button>
   
      </div>
              
            
        )
    }
}