import api from '../utils/api';
import { navigate } from '../navigation';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { 
    LOGIN_SUCCESS, 
    LOGIN_FAIL, 
    CLEAR_ERROR 
} from './types';


/* ===================================
   Login user
=================================== */
export const login = (name, password) => async dispatch => {
    const body = JSON.stringify({ name, password });
    
    try {
        const res = await api.post('/user/login', body);
        
        await AsyncStorage.setItem('token', res.data.token)

        dispatch({
            type: LOGIN_SUCCESS,
            payload: res.data
        })

        // Redirect to Home Screen after login
        navigate('Home');

    } catch (err) {
        
        // Dispatch the error message
        dispatch({
            type: LOGIN_FAIL,
            payload: 'Something went wrong'
        })

        // Remove error message after 3 sec
        setTimeout(function() {
            dispatch({
                type: LOGIN_FAIL,
                payload: ''
            })
        }, 3000)
    }
}


/* ===================================
   Clear error message
=================================== */
export  const clearError = () => dispatch => {
    dispatch({
        type: CLEAR_ERROR
    })
}



/* ===================================
   AsyncStorage for local signin
=================================== */
export const localLogin = () => async dispatch => {
    const token = await AsyncStorage.getItem('token');
    if(token) {
        dispatch({
            type: LOGIN_SUCCESS,
            payload: token
        })
        navigate('Home');

    } else {
        navigate('Login');
    }
}
