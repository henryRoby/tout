import React, { Component } from 'react';
import axios from 'axios';


export default class ListTous extends Component {

    constructor(props) {
        super(props);
        this.state = { produit: [] };

    }
    componentDidMount() {
        axios.get('http://localhost:8080/user/produit/')
            .then(response => {
                console.log('i am a response', response)
                this.setState({ produit: response.data });
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    liste() {
        return <div>
            <div className="table-responsive">
                <table className="table">
                    <thead>
                        <tr>
                            <th>id</th>
                            <th>produit</th>
                            <th>prix</th>
                            <th>description</th>
                            <th>photo</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            (this.state.produit.length > 0) ? (this.state.produit.map((obj) => {
                                return <tr key={obj._id}>
                                    <td>{obj._id}</td>
                                    <td>{obj.nom}</td>
                                    <td>{obj.prix}</td>
                                    <td>{obj.description}</td>
                                    <td><img width="150px" height="50px" src={'http://localhost:8080/user/produitImage/'+obj.image} alt="pdp" />
                                    </td>
                                    {console.log(obj)}
                                </tr>

                            })) : ('')
                        }
                    </tbody>
                </table>
            </div>
        </div>
    }
    render() {
        return (
            <div>
                {this.liste()}
            </div>
        );
    }
}