import axios from 'axios';
import { GET_ERRORS,SET_CURRENT_USER } from './type';
import setAuthToken from '../setAuthtoken';
import jwt_decode from 'jwt-decode';
import store from '../store';
export const registerUser = (user, history) => dispatch => {
    axios.post('http://localhost:8080/registercuisinier', user)
            .then(res => history.push('/login'))
            .catch(err => {
                dispatch({
                    type: GET_ERRORS,
                    payload: err.response.data
                });
            });
}

export const loginUser = (user,history) => dispatch => {
    axios.post('http://localhost:8080/logincuisinier', user)
            .then(res => {
                // console.log(res.data);
                const { token } = res.data;
                localStorage.setItem('jwtToken', res.data.nom);
                localStorage.setItem('id', res.data.id);
                console.log(res.data)
                setAuthToken(token);
                const decoded = jwt_decode(token);
                dispatch(setCurrentUser(decoded));
                if(res.data.password!== 'Incorrect Password')
                {
                  window.location='/profil';
               }
                // if(localStorage.jwtToken) {
                //       setAuthToken(localStorage.jwtToken);
                //       const decoded = jwt_decode(localStorage.jwtToken);
                //       store.dispatch(setCurrentUser(decoded));
                    
                //       const currentTime = Date.now() / 1000;
                //       if(decoded.exp < currentTime) {
                //         store.dispatch(loginUser());
                //         window.location.href = '/'
                //       } 
                //     }
                
            })
            // .catch(err => {
            //     dispatch({
            //         type: GET_ERRORS,
            //         payload: err.response.data
            //     });
            // });
}
export const logoutUser = (history) => dispatch => {
    localStorage.removeItem('jwtToken');
    setAuthToken(false);
    dispatch(setCurrentUser({}));
    history.push('/login');
}
export const setCurrentUser = decoded => {
    return {
        type: SET_CURRENT_USER,
        payload: decoded
    }
}