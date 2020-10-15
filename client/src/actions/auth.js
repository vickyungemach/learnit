import axios from 'axios';
import { url } from '../config';
import setAuthToken from '../utils/setAuthToken';

export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const GET_USER = 'GET_USER';
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
export const REGISTER_FAIL = 'REGISTER_FAIL';
export const LOGOUT = 'LOGOUT';
export const CHECK_LOGIN = 'CHECK_LOGIN';


// Load user
export const loadUser = () => async dispatch => {

    if(localStorage.token) {
        setAuthToken(localStorage.token);
    }

    try {

        const res = await axios.get(url + '/api/user');

        dispatch({
            type: GET_USER,
            payload: res.data
        })

    } catch (err) {
        console.log(err.message);
    }
}


// Login Check to prevent /login flash
export const loginCheck = () => async dispatch => {

    setTimeout(function(){
        dispatch({
            type: CHECK_LOGIN
        })
        console.log('loggin checked');
    }, 100);

}

// Login user
export const login = (name, password) => async dispatch => {

    const config = {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    }

    const body = JSON.stringify({ name, password });

    try {

        const res = await axios.post(`${url}/api/user/login`, body, config);
        
        
        dispatch({
            type: LOGIN_SUCCESS,
            payload: res.data
        })


    } catch (err) {
        console.log(err.message);
    }
}


// Register user
export const register = (name, password) => async dispatch => {

    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }

    const body = JSON.stringify({ name, password })
    
    try {
        const res = await axios.post(`${url}/api/user/register`, body, config);
        console.log(res);

        dispatch({
            type: REGISTER_SUCCESS,
            payload: res.data
        })

        loadUser();

    } catch (err) {
        console.error(err.message);
        dispatch({
            type: REGISTER_FAIL,
        })
    }
}


// Logout user
export const logout = () => async dispatch => {
    dispatch({
        type: LOGOUT
    })
}


// Show Settings
export const showSettings = () => async dispatch => {
    try {
        const settings = document.getElementById("settings");
        settings.classList.toggle("show-settings");
    } catch (err) {
        console.error(err.message);
    }
}