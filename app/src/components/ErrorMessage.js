import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const ErrorMessage = ({ message }) => {
    return (
        <Text style={styles.error}>Something went wrong</Text>
    )
}

export default ErrorMessage

const styles = StyleSheet.create({
    
    error: {
        backgroundColor: '#f8e1e1',
        paddingVertical: 10,
        paddingHorizontal: 20,
        width: '100%',
        marginBottom: 10,
        marginTop: 5,
        borderRadius: 5,
        overflow: 'hidden',
        color: 'salmon',
        fontFamily: 'lato-regular',
        borderWidth: 1,
        borderColor: 'salmon'
    },

})
