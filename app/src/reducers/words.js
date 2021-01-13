import {
    GET_WORDS_SUCCESS,
    GET_WORDS_FAIL,
    GET_LISTS,
    SAVE_WORD_SUCCESS,
    SAVE_WORD_FAIL
} from '../actions/types';

const initialState = {
    words: [],
    error: '',
    loading: true
}

export default function (state = initialState, action) {
    const { type, payload } = action;

    switch (type) {

        case GET_WORDS_SUCCESS:
            return {
                ...state,
                loading: false,
                words: payload
            }

        case SAVE_WORD_FAIL:
        case GET_WORDS_FAIL:
            return {
                ...state,
                loading: false,
                error: payload
            }


        case SAVE_WORD_SUCCESS:
            return {
                ...state,
                words: [...state.words, payload]
            }

        case GET_LISTS:
            return {
                ...state,
                loading: false,
                lists: payload
            }

        default:
            return {
                ...state
            }
    }
}