import React, { Component } from 'react'

import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import PropTypes from 'prop-types';
import Register from './register'
import { connect } from 'react-redux';
import { loginUser } from '../actions/authentificate';
import classnames from 'classnames';
 class Login extends Component {
    constructor() {
        super();
        this.state = {
            email: '',
            password: '',
            errors: {},
          
        }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = {
            email: this.state.email,
            password: this.state.password,
        }
        this.props.loginUser(user);
      
         
    }

    componentWillReceiveProps(nextProps) {
        console.log(this.props.auth.isAuthenticated);
        if(nextProps.errors) {
            this.setState({
                errors: nextProps.errors
            });
        }
       
      
    }
    componentDidMount() {
        console.log(this.props);
        
        if(this.props.auth.isAuthenticated)
         {
            this.props.history.push('/profil');
        }
    }

    render() {
        return (
            <Router>
            <div id="contenu">
               
                <div class="d-flex justify-content-center h-100">
                    <div class="card">
                        <div class="card-header">
                            <h3>Sign In</h3>
                            <div class="d-flex justify-content-end social_icon">
                                <span><i className="fab fa-facebook-square"></i></span>
                                <span><i class="fab fa-google-plus-square"></i></span>
                                <span><i class="fab fa-twitter-square"></i></span>
                            </div>
                        </div>
                        <div class="card-body">
                            <form onSubmit={ this.handleSubmit }>
                                <div class="input-group form-group">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text"><i class="fas fa-user"></i></span>
                                    </div>
                                    <input onChange={ this.handleInputChange }
                    value={ this.state.email } type="text"  name="email" placeholder="username"  className={classnames('form-control form-control-lg', {
                        'is-invalid': this.state.errors.email
                    })}  />

                                </div>
                                <div class="input-group form-group">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text"><i class="fas fa-key"></i></span>
                                    </div>
                                    <input type="password" name="password" className={classnames('form-control', {
                        'is-invalid':  this.state.errors.password
                    })} placeholder="password" onChange={ this.handleInputChange }
                    value={ this.state.password } />
                                </div>
                                <div class="row align-items-center remember">
                                    <input type="checkbox" />Remember Me
					</div>
                                <div class="form-group">
                                    <input type="submit" value="Login" class="btn float-right login_btn" />
                                </div>
                            </form>
                        </div>
                        <div class="card-footer">
                            <div class="d-flex justify-content-center links">
                                Don't have an account?<a href="#"><Link to="/register">Sign Up</Link></a>
                            </div>
                            <div class="d-flex justify-content-center">
                                <a href="#">Forgot your password?</a>
                            </div>
                        </div>
                    </div>
                </div>
                <Route path="/register"  exact component={Register} />
                
                
        </div>
        </Router>
                )
            }
        }
        Login.propTypes = {
            loginUser: PropTypes.func.isRequired,
            auth: PropTypes.object.isRequired,
            errors: PropTypes.object.isRequired
        
        }
        
        const mapStateToProps = (state) => ({
            auth: state.auth,
    errors: state.errors
        })
        
        export  default connect(mapStateToProps, { loginUser })(Login)