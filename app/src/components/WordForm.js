import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { connect } from 'react-redux'
import { toggleSlide } from '../actions/utils';
import ErrorMessage from '../components/ErrorMessage';


const WordForm = (props) => {
    //  WordListScreen props
    const { headerText, buttonText, onSubmit, editWord, editTranslation, editId, editListId } = props;

    // mapStateToProps
    const { error } = props

    // actions/utils
    const { toggleSlide } = props;


    // Form state
    const [word, setWord] = useState('');
    const [translation, setTranslation] = useState('')

    // Set state with words to edit
    useEffect(() => {
        setWord(editWord);
        setTranslation(editTranslation)   
    }, [editWord, editTranslation])


    const clearState = () => {
        setWord('');
        setTranslation('');
    }


    return (
        <>
            {/* Closing x button */}
            < FontAwesome
                style={styles.close}
                name="times"
                size={24}
                color="#514F55"
                onPress={() => {
                    toggleSlide();
                    clearState();
                }}
            />

            < View style={styles.container} >

                {/* Form header */}
                <TextInput style={styles.title} > {headerText} </TextInput>

                {/* Error message */}
                {error ? <ErrorMessage message={error} /> : null}

                {/* Word input */}
                <TextInput
                    style={styles.input}
                    placeholder="Spanish"
                    value={word}
                    onChangeText={newInput => setWord(newInput)}
                    autoCapitalize="none"
                />

                {/* Translation input */}
                <TextInput
                    style={styles.input}
                    placeholder="English"
                    value={translation}
                    onChangeText={newInput => setTranslation(newInput)}
                    autoCapitalize="none"
                />

                {/* Save word button */}
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => {
                        onSubmit(word, translation, editListId, editId);
                        clearState();
                    }}>
                    <Text style={styles.buttonText} selectionColor={'#f3c74f'}>{buttonText}</Text>
                </TouchableOpacity>
            </View >
        </>
    )
}


const styles = StyleSheet.create({

    container: {
        marginTop: '40%',
        marginHorizontal: 35,
        alignItems: 'center'
    },

    close: {
        position: 'absolute',
        top: 0,
        right: 0,
        paddingHorizontal: 40,
        paddingVertical: 30
    },

    title: {
        fontFamily: 'lato-bold',
        fontSize: 16,
        marginBottom: 25,
        color: '#514F55'
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
        paddingVertical: 13,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 7,
        marginVertical: 20
    },

    buttonText: {
        color: '#fff',
        fontFamily: 'lato-black'
    }
})


const mapStateToProps = state => ({
    error: state.words.error
})

export default connect(mapStateToProps, { toggleSlide })(WordForm)