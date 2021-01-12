import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, FlatList } from 'react-native';
import { Feather } from '@expo/vector-icons';
import WordListItem from '../components/WordListItem';
import WordForm from '../components/WordForm';
import { connect } from 'react-redux';
import { saveWord } from '../actions/words';
import { toggleSlide } from '../actions/utils';
import SlideScreen from '../components/SlideScreen';

const WordListScreen = (props) => {
    const { navigation } = props;

    // actions/words & mapStateToProps
    const { saveWord, allWords } = props;

    // actions/utils
    const { toggleSlide } = props;


    // VocabularyItem navigation.navigate()
    const list = navigation.getParam('list');
    console.log(list)


    // Filter words 
    const listWords = allWords.filter(word => {
        return word.list._id === list._id
    })

    // OnSubmit to save new word
    const onSubmit = (word, translation) => {
        const formData = {
            spanish: word,
            english: translation,
            list: list._id
        }

        saveWord(formData)
        toggleSlide()
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

            {/* List of WordListItems */}
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
                    title={list.title}
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
    allWords: state.words.allWords
})

export default connect(mapStateToProps, { saveWord, toggleSlide })(WordListScreen);