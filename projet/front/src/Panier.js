import React, { Component } from 'react'

export default class Panier extends Component {
    constructor(props) {
        super(props);

        this.state = {
            nom:"",
           
        };

        
    }
    componentDidMount(){
        this.setState({nom:localStorage.getItem("555")})
    }
    render() {
        return (
            <div>
              {this.state.nom}  
            </div>
        )
    }
}
