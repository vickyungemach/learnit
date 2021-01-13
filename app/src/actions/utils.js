import { Animated } from 'react-native';

import { 
    TOGGLE_SLIDESCREEN 
} from './types';

/* ===================================
   Toggle SlideScreen
=================================== */
export const toggleSlide = () => async (dispatch, getState) => {
    // Get isHidden and bounceValue from state
    const isHidden = getState().utils.slideScreen.isHidden;
    const bounceValue = getState().utils.slideScreen.bounceValue;

    let toValue = 700;
    
    if (isHidden) {
        toValue = 0;
    }

    Animated.spring(
        bounceValue,
        {
            toValue: toValue,
            velocity: 3,
            tension: 2,
            friction: 8,
            useNativeDriver: true
        }
    ).start();

    dispatch({
        type: TOGGLE_SLIDESCREEN
    })
}

