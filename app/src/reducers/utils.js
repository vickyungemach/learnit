import { Animated } from 'react-native';

import {
    TOGGLE_SLIDESCREEN,
    GET_SEARCH_TERM
} from '../actions/types';

const initialState = {
    slideScreen: {
        isHidden: true,
        bounceValue: new Animated.Value(1000)
    },
    searchTerm: ''
}

export default function (state = initialState, action) {
    const { type, payload } = action;

    switch (type) {

        case TOGGLE_SLIDESCREEN:
            return {
                ...state,
                slideScreen: {
                    ...state.slideScreen,
                    isHidden: !state.slideScreen.isHidden
                }
            }

        case GET_SEARCH_TERM:

            return {
                ...state,
                searchTerm: payload
            }


        default:
            return {
                ...state
            }
    }
}
