import { Animated } from 'react-native';
export const TOGGLE_SLIDESCREEN = 'TOGGLE_SLIDESCREEN';


// Toggle Slide Screen
export const toggleSlide = () => async (dispatch, getState) => {
    const isHidden = getState().utils.slideScreen.isHidden;
    const bounceValue = getState().utils.slideScreen.bounceValue;

    console.log(isHidden)

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

