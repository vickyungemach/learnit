import api from '../utils/api';

import {
    GET_WORDS_SUCCESS,
    GET_WORDS_FAIL,
    SAVE_WORD_SUCCESS,
    SAVE_WORD_FAIL,
    DELETE_WORD_SUCCESS,
    UPDATE_WORD_SUCCESS
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
   Save new word
=================================== */
export const saveWord = (spanish, english, list) => async dispatch => {
    const body = JSON.stringify({ spanish, english, list });
    console.log(body)

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
   Update word
=================================== */
export const updateWord = (word, translation, id) => async dispatch => {
    try {
        const body = { spanish: word, english: translation }
        const res = await api.put(`/words/${id}`, body);
        
        dispatch({
            type: UPDATE_WORD_SUCCESS,
            payload: res.data
        })
    } catch (err) {
        console.log(err.message)
    }
}



/* ===================================
   Delete word
=================================== */
export const deleteWord = id => async dispatch => {
    try {
        const res = await api.delete(`/words/${id}`);

        dispatch({
            type: DELETE_WORD_SUCCESS,
            payload: res.data.word
        })

    } catch (err) {
        console.log(err.message);

    }
}