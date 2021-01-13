import React, { useState } from 'react';
import { StyleSheet, Text } from 'react-native';
import ErrorMessage from '../components/ErrorMessage';


const AuthForm = (props) => {
    const { headerText, errorMessage, authType, onSubmit, submitButtonText, authLinkRoute, authLinkTitle } = props

    // Form State
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [password2, setPassword2] = useState('');

    return (
        <>
            {/* Pinapple and Header */}
            <Image style={styles.pineapple} source={pineapple} />
            <Text style={styles.title} >{headerText}</Text>

            {/* Error Message */}
            { errorMessage ? <ErrorMessage message={errorMessage} /> : null}

            {/* Username input */}
            <TextInput
                autoCapitalize='none'
                autoCorrect={false}
                style={styles.input}
                placeholder="Username"
                selectionColor={'#f3c74f'}
                value={username}
                onChangeText={newInput => setUsername(newInput)}
            />

            {/* Password input */}
            <TextInput secureTextEntry={true}
                autoCapitalize="none"
                autoCorrect={false}
                style={styles.input} placeholder="Password"
                selectionColor={'#f3c74f'}
                value={password}
                onChangeText={newInput => setPassword(newInput)}
            />

            {/* Sign in button */}
            <TouchableOpacity style={styles.button} onPress={() => onSubmit(username, password)}>
                <Text style={styles.buttonText}>{submitButtonText}</Text>
            </TouchableOpacity>

            {/* Link to Signup page */}
            <TouchableOpacity style={styles.link} onPress={() => navigation.navigate(authLinkRoute)}>
                <Text style={styles.linkText}>{authLinkTitle}</Text>
            </TouchableOpacity>
        </>
    )
}


const styles = StyleSheet.create({})

export default AuthForm;
