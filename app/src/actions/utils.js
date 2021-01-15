import { Animated, Keyboard } from 'react-native';

import { 
    TOGGLE_SLIDESCREEN,
    GET_SEARCH_TERM
} from './types';


/* ===================================
   Toggle SlideScreen
=================================== */
export const toggleSlide = () => async (dispatch, getState) => {
    
    // Get isHidden and bounceValue from state
    const isHidden = getState().utils.slideScreen.isHidden;
    const bounceValue = getState().utils.slideScreen.bounceValue;

    let toValue = 1000;
    
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

    Keyboard.dismiss();

    dispatch({
        type: TOGGLE_SLIDESCREEN
    })
}


/* ===================================
   Search term
=================================== */
export const getSearchTerm = (searchedWord) => async dispatch => {
    try {
        
        dispatch({
            type: GET_SEARCH_TERM,
            payload: searchedWord
        })

    } catch (err) {
        console.log(err.message);
    }
}