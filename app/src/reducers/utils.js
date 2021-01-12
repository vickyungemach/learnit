import { Animated } from 'react-native';

import {
    TOGGLE_SLIDESCREEN
} from '../actions/utils';

const initialState = {
    slideScreen: {
        isHidden: true,
        bounceValue: new Animated.Value(700)
    }
}

export default function(state = initialState, action) {
    const { type, payload } = action;

    switch(type) {

        case TOGGLE_SLIDESCREEN:
    
            return {
                ...state,
                slideScreen: {
                    ...state.slideScreen,
                    isHidden: !state.slideScreen.isHidden
                }
            }

        default:     
            return {
                ...state
            }
    }
}
