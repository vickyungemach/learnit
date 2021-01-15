import {
    GET_WORDS_SUCCESS,
    GET_WORDS_FAIL,
    SAVE_WORD_SUCCESS,
    SAVE_WORD_FAIL,
    DELETE_WORD_SUCCESS,
    UPDATE_WORD_SUCCESS
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

        case UPDATE_WORD_SUCCESS:
            return {
                ...state,
                words: state.words.map(word => {
                    return word._id !== payload._id ? word : payload
                })
            }

        case DELETE_WORD_SUCCESS:
            return {
                ...state,
                words: state.words.filter(word => word._id !== payload._id)
            }


        default:
            return {
                ...state
            }
    }
}
