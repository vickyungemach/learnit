import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { logout } from '../actions/auth';

const AccountScreen = (props) => {

    // actions
    const { logout } = props;
    
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.button} onPress={logout}>
               <Text style={styles.buttonText}>Log out</Text> 
            </TouchableOpacity>
        </View>
    )
}



const styles = StyleSheet.create({
    container: {
        padding: 30,
        paddingTop: 50
    },

    button: {
        width: '100%',
        backgroundColor: '#f3c74f',
        color: '#fff',
        paddingVertical: 15,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 7,
        marginTop: 25
    },

    buttonText: {
        color: '#fff',
        fontFamily: 'lato-black'
    },
});

export default connect(null, { logout })(AccountScreen)