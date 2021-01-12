import {
    GET_WORDS,
    GET_LISTS,
    SAVE_WORD
} from '../actions/words';

const initialState = {
    loading: true,
    allWords: [],
    lists: []
}

export default function(state = initialState, action) {
    const { type, payload } = action;

    switch(type) {

        case GET_WORDS:
            return {
                ...state,
                loading: false,
                allWords: payload
            }
        
        case GET_LISTS:
            return {
                ...state,
                loading: false,
                lists: payload
            }

        case SAVE_WORD: 
            return {
                ...state,
                allWords: [...state.allWords, payload]
            }

        default:     
            return {
                ...state
            }
    }
}
