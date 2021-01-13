import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, FlatList } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { connect } from 'react-redux';
import { saveWord } from '../actions/words';
import { toggleSlide } from '../actions/utils';
import SlideScreen from '../components/SlideScreen';
import WordListItem from '../components/WordListItem';
import WordForm from '../components/WordForm';


const WordListScreen = (props) => {
    const { navigation } = props;

    // mapStateToProps & actions/word
    const { saveWord, words } = props;

    // actions/utils
    const { toggleSlide } = props;


    // VocabularyItem navigation.navigate()
    const list = navigation.getParam('list');


    // Filter words by list
    const listWords = words.filter(word => {
        return word.list._id === list._id
    })

    // OnSubmit passed down to WordForm
    const onSubmit = (word, translation) => {
        saveWord(word, translation, list._id)
    }

    return (
        <>
            {/* Header with word count */}
            <View style={styles.backgroundHeader}>
                <Text style={styles.title}>{list.title}</Text>
                <Text style={styles.count}>{listWords.length} Words</Text>

                {/* Add new word button that toggles WordForm */}
                <TouchableOpacity style={styles.addButton} onPress={toggleSlide}>
                    <Feather name="plus" size={17} color="#f3c74f" />
                    <Text style={styles.addButtonText}>Add new word</Text>
                </TouchableOpacity>
            </View>

            {/* List of Words */}
            <View style={styles.backgroundContent}>
                <FlatList
                    showsVerticalScrollIndicator={false}
                    data={listWords}
                    keyExtractor={(word) => word._id}
                    renderItem={({ item }) => {
                        return <WordListItem word={item} />
                    }}
                />
            </View>

            {/* Hidden WordForm in Slide Screen */}
            <SlideScreen>
                <WordForm
                    headerText={list.title}
                    buttonText="Add word"
                    onSubmit={onSubmit}
                />
            </SlideScreen>
        </>
    )
}



const styles = StyleSheet.create({

    backgroundHeader: {
        padding: 30,
        paddingTop: 50,
        height: 170
    },

    backgroundContent: {
        backgroundColor: '#fcfcfc',
        flex: 1,
        paddingTop: 20
    },

    title: {
        color: '#413d3d',
        fontSize: 24,
        fontFamily: 'lato-black',
        marginBottom: 7
    },

    count: {
        fontFamily: 'lato-regular',
        color: '#c4c1c1'
    },

    addButton: {
        flexDirection: 'row',
        position: 'absolute',
        bottom: 20,
        right: 20
    },

    addButtonText: {
        color: '#f3c74f',
        fontSize: 15,
        fontWeight: '500',
        marginLeft: 5
    },

    wordForm: {
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        height: 700,
        backgroundColor: '#fff'
    }
})


const mapStateToProps = state => ({
    words: state.words.words
})

export default connect(mapStateToProps, { saveWord, toggleSlide })(WordListScreen);