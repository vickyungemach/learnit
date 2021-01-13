import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';


const ReviewScreenII = () => {
    // Form State
    const [placeholder, setPlaceholder] = useState('Translation');
    const [translation, setTranslation] = useState('')

    function hidePlaceholder() {
        setPlaceholder('')
    }

    function showPlaceholder() {
        !translation ? setPlaceholder('Translation') : null
    }

    return (
        <>
            {/* Header word to translate */}
            <View style={styles.backgroundHeader}>
                <Text style={styles.word}>candle</Text>
            </View>

            <View style={styles.backgroundContent}>
                {/* Translate input */}
                <TextInput 
                    autoCapitalize='none'
                    autoCorrect={false}
                    style={styles.translation} 
                    placeholder={placeholder} 
                    onFocus={hidePlaceholder} 
                    onBlur={showPlaceholder}
                    value={translation}
                    onChangeText={(newInput) => setTranslation(newInput)}
                    selectionColor={'#f3c74f'}
                />
            </View>
        </>
    )
}


const styles = StyleSheet.create({

    backgroundHeader: {
        backgroundColor: '#fff',
        paddingVertical: 70,
        alignItems: 'center'
    },

    backgroundContent: {
        backgroundColor: '#fcfcfc',
        flex: 1,
        alignItems: 'center'
    },

    word: {
        fontFamily: 'lato-black',
        fontSize: 35,
        color: '#f3c74f'
    },

    translation: {
        backgroundColor: '#fff',
        width: '85%',
        borderRadius: 7,
        textAlign: 'center',
        marginVertical: 30,
        paddingVertical: 50,
        paddingHorizontal: 30,
        fontFamily: 'lato-regular',
        fontSize: 18,

        // borderWidth: 2,
        // borderColor: '#f1eeee',

        shadowColor: "#1f2023",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.18,
        shadowRadius: 2,
        elevation: 0
    }
})


export default ReviewScreenII;
