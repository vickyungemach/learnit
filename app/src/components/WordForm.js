import React, { useState } from 'react'
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Button } from 'react-native';
import { connect } from 'react-redux'
import { toggleSlide } from '../actions/utils';

const WordForm = (props) => {
    // WordListScreen props
    const { title, onSubmit } = props;

    // actions/utils
    const { toggleSlide } = props;

    const [word, setWord] = useState('');
    const [translation, setTranslation] = useState('')


    return (
        <View style={styles.container}>

                <Button title="close" onPress={toggleSlide} />
                <Text style={styles.title}>{title} </Text>

                {/* TextInput word */}
                <TextInput 
                    style={styles.input} 
                    placeholder="Spanish"
                    value={word} 
                    onChangeText={newInput => setWord(newInput)}
                />

                {/* TextInput translation */}
                <TextInput 
                    style={styles.input} 
                    placeholder="English"
                    value={translation} 
                    onChangeText={newInput => setTranslation(newInput)}
                />

                {/* Save word button */}
                <TouchableOpacity style={styles.button} onPress={() => onSubmit(word, translation)}>
                    <Text style={styles.buttonText} selectionColor={'#f3c74f'}>Save word</Text>
                </TouchableOpacity>
        </View>
    )
}


const styles = StyleSheet.create({

    container: {
        marginTop: '50%',
        marginHorizontal: 35,
        alignItems: 'center'
    },

    title: {
        fontFamily: 'lato-bold',
        fontSize: 16,
        marginBottom: 25
    },

    input: {
        borderWidth: 1,
        borderColor: 'gainsboro',
        padding: 12,
        borderRadius: 7,
        marginVertical: 8,
        width: '100%'
    },

    button: {
        width: '100%',
        backgroundColor: '#f3c74f',
        color: '#fff',
        paddingVertical: 15,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 7,
        marginVertical: 25
    },

    buttonText: {
        color: '#fff',
        fontFamily: 'lato-black'
    }
})


export default connect(null, { toggleSlide })(WordForm)