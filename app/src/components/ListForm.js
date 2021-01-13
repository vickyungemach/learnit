import React, { useState } from 'react'
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Button } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { connect } from 'react-redux'
import { toggleSlide } from '../actions/utils';
import ErrorMessage from '../components/ErrorMessage';


const WordForm = (props) => {
    // VocabularyScreen
    const { headerText, buttonText, onSubmit, editList } = props;

    // mapStateToProps
    const { error } = props

    // actions/utils
    const { toggleSlide } = props;


    // Form state
    const [listName, setListName] = useState(!editList ? '' : editList)

    const clearState = () => {
        setListName('');
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

            <View style={styles.container} >

                {/* Form header */}
                <TextInput style={styles.title} > {headerText} </TextInput>

                {/* Error message */}
                {error ? <ErrorMessage message={error} /> : null}

                {/* List input */}
                <TextInput
                    style={styles.input}
                    placeholder="List name"
                    value={listName}
                    onChangeText={newInput => setListName(newInput)}
                />

                {/* Save word button */}
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => {
                        onSubmit(listName);
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
        marginTop: '50%',
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