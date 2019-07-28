import React from 'react';
import { Button } from "react-bootstrap";
import ListTous from './List/List'
import NouvProd from '../NouvProd/ajoutProd'
import API from '../../utils/API';
import Modal from 'react-awesome-modal';

export class Dashboard extends React.Component {
    
    constructor(props){
        super(props);
        this.disconnect.bind(this);
        this.state = {
            visible : false
        }
    }

    openModal() {
        this.setState({
            visible : true
        });
    }
    closeModal() {
        this.setState({
            visible : false
        });
    }
    disconnect = event => {
        API.logout();
        window.location = "/";
    }

    send = event => {
        API.isAuth();
        console.log(localStorage.getItem('token'))
    }
    render() {
        return(
            <div className="Dashboard">
                <section>
                <button className="btn btn-primary" type="button" onClick={() => this.openModal()}>Produit</button>
                <Modal 
                    visible={this.state.visible}
                    width="400"
                    height="350"
                    effect="fadeInUp"
                    onClickAway={() => this.closeModal()}
                >   
                <NouvProd/><br/>
                    <div>
                        <a href="#" className="btn btn-danger" onClick={() => this.closeModal()}>X</a>
                    </div>
                </Modal>
            </section>
                <ListTous/>
                <Button
                onClick={this.disconnect}
                type="submit">
                Déconnecter
                </Button>
            </div>
        )
    }
}