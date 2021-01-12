import {
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    CLEAR_ERROR
} from '../actions/auth';

const initialState = {
    token: '',
    isAuthenticated: false,
    loading: true,
    user: null,
    error: ''
}

export default function(state = initialState, action) {
    const { type, payload } = action;

    switch(type) {

        case LOGIN_SUCCESS: 
            return {
                ...state,
                token: payload.token,
                isAuthenticated: true,
                loading: false,
                user: payload
            }

        case LOGIN_FAIL:
            return {
                ...state,
                loading: false,
                error: payload
            }

        case CLEAR_ERROR: 
           
            return {
                ...state, 
                error: null
            }

        default:     
            return {
                ...state
            }
    }
}
