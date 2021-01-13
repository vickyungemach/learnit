import React from 'react';
import { StyleSheet, Animated } from 'react-native';
import { connect } from 'react-redux';


const SlideScreen = ({ bounceValue, children }) => {

    /* ===================================
       SlideScreen Instructions
    =================================== */
    // import SlideScreen from 'components/SlideScreen'
    // import { toggleSlide } from 'actions/utils'

    // <Button title="close" onPress={toggleSlide} />

    // <SlideScreen>
    // <ComponentToBeSlide />
    // </SlideScreen>



    return (
        <Animated.View style={[styles.slide, { transform: [{ translateY: bounceValue }] }]} >
            { children}
        </Animated.View>
    )
}


const styles = StyleSheet.create({
    slide: {
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        height: 700,
        backgroundColor: '#fff'
    }
})

const mapStateToProps = state => ({
    bounceValue: state.utils.slideScreen.bounceValue
})

export default connect(mapStateToProps, {})(SlideScreen)