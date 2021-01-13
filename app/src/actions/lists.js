import api from '../utils/api';

import {
    GET_LISTS,
    SAVE_LIST_SUCCESS,
    SAVE_LIST_FAIL
} from './types';


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
   Save new list
=================================== */
export const saveList = (title) => async dispatch => {
    const body = JSON.stringify({ title });

    try {
        const res = await api.post('/lists', body);
        console.log(res.data.list)

        dispatch({
            type: SAVE_LIST_SUCCESS,
            payload: res.data.list
        })

    } catch (err) {

        console.log(err);
        dispatch({
            type: SAVE_LIST_FAIL,
            payload: 'Something went wrong'
        })
    }


}