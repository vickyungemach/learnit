import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Entypo } from '@expo/vector-icons';

const VocabularyItem = (props) => {
    // From from VocabularyScreen
    const { list, words, navigation } = props;

    return (

        // Navigates to WordListScreen and passes the list to be displayed
        <TouchableOpacity onPress={() => navigation.navigate('WordList', {'list': list})}>
            <View style={styles.container}>
                <View>
                    <Text style={styles.title}>{list.title}</Text>
                    <Text style={styles.count}>{words.length} Words</Text>
                </View>
                <Entypo style={styles.chevron} name="chevron-right" size={24} color="lightgrey" />
            </View>
        </TouchableOpacity>
    )
}

export default VocabularyItem

const styles = StyleSheet.create({

    container: {
        backgroundColor: '#fff',
        paddingHorizontal: 25,
        paddingVertical: 21,
        paddingBottom: 19,
        marginVertical: 7,
        marginHorizontal: 20,
        borderRadius: 6,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',

        shadowColor: "#1f2023",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2,
        elevation: 0
    },

    title: {
        marginBottom: 7,
        fontFamily: 'lato-bold',
        fontSize: 14,
        color: '#2e2c2c',

    },

    count: {
        fontSize: 12,
        color: 'lightgrey',
        fontFamily: 'lato-bold',
    }
})

