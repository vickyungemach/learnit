import api from '../utils/api';

import {
    GET_WORDS_SUCCESS,
    GET_WORDS_FAIL,
    SAVE_WORD_SUCCESS,
    SAVE_WORD_FAIL,
    GET_LISTS,
    SAVE_LIST_SUCCESS,
    SAVE_LIST_FAIL
} from './types';


/* ===================================
   Get all words
=================================== */
export const getWords = () => async dispatch => {
    try {
        const res = await api.get('/words');

        dispatch({
            type: GET_WORDS_SUCCESS,
            payload: res.data
        })

    } catch (err) {
        console.log(err)

        dispatch({
            type: GET_WORDS_FAIL,
            payload: 'Couldnt get words'
        })
    }
}

/* ===================================
   Get all lists
=================================== */
export const getLists = () => async dispatch => {
    try {
        const res = await api.get('/lists');

        dispatch({
            type: GET_LISTS,
            payload: res.data
        })

    } catch (err) {
        console.log(err)
    }
}


/* ===================================
   Save new word
=================================== */
export const saveWord = (spanish, english, list) => async dispatch => {
    const body = JSON.stringify({ spanish, english, list });

    try {
        const res = await api.post('/words', body);

        dispatch({
            type: SAVE_WORD_SUCCESS,
            payload: res.data
        })

    } catch (err) {
        console.error(err.message);

        dispatch({
            type: SAVE_WORD_FAIL,
            payload: 'Couldnt save word'
        })

        // Remove error message after 3 sec
        setTimeout(function () {
            dispatch({
                type: LOGIN_FAIL,
                payload: ''
            })
        }, 3000)
    }
}


/* ===================================
   Save new list
=================================== */
export const saveList = (title) => async dispatch => {
    const body = JSON.stringify({ title });

    try {
        const res = await api.post('/lists', body);

        dispatch({
            type: SAVE_LIST_SUCCESS,
            payload: res.data
        })
    } catch (err) {
        console.log(err);

        dispatch({
            type: SAVE_LIST_FAIL,
            payload: res.data
        })
    }


}