import api from '../utils/api';
export const GET_WORDS = 'GET_WORDS';
export const GET_LISTS = 'GET_LISTS';
export const SAVE_WORD = 'SAVE_WORD';



// Get all words
export const getWords = () => async dispatch => {
     try {
        const res = await api.get('/words');
        
        dispatch({
            type: GET_WORDS,
            payload: res.data
        })

    } catch (err) {
        console.log(err)
    }

}

// Get all word lists
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


// Save new word
export const saveWord = (formData) => async dispatch => {
    console.log('save word')

    try {

        const res = await api.post('/words', formData);
        console.log('res', res.data)

        dispatch({
            type: SAVE_WORD,
            payload: res.data
        })

    } catch (err) {
        console.error(err.message);
    }
}
