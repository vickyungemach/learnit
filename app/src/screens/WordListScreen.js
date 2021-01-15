import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { SwipeListView } from 'react-native-swipe-list-view';
import { connect } from 'react-redux';
import { saveWord, deleteWord, updateWord } from '../actions/words';
import { toggleSlide } from '../actions/utils';
import SlideScreen from '../components/SlideScreen';
import WordListItem from '../components/WordListItem';
import WordForm from '../components/WordForm';
import HiddenItemWithActions from '../components/HiddenItemWithActions';


const WordListScreen = (props) => {
    const { navigation } = props;

    // mapStateToProps & actions/word
    const { saveWord, deleteWord, updateWord, words } = props;

    // actions/utils
    const { toggleSlide } = props;


    // VocabularyItem navigation.navigate()
    const list = navigation.getParam('list');


    // Filter words by list
    const listWords = words.filter(word => {
        return word.list._id === list._id
    })

    // Edit state
    const [editWord, setEditWord] = useState('');
    const [editTranslation, setEditTranslation] = useState('');
    const [editId, setEditId] = useState('');

    // Clear edit state
    const clearEdit = () => {
        setEditWord('');
        setEditTranslation('');
        setEditId('')
    }


    // Save or update list
    const onSubmit = (word, translation, list, id) => {
        if (!editWord) {
            saveWord(word, translation, list);
        } else {
            updateWord(word, translation, id);
            toggleSlide();
            clearEdit();
        }
    }



    // Edit button
    const editRow = (rowMap, rowKey) => {
        if (rowMap[rowKey]) {
            rowMap[rowKey].closeRow();

            // When sliding down form, wipe edit state
            clearEdit();
        }

        // Open form with edit formdata
        setEditWord(words.find(word => word._id === rowKey).spanish);
        setEditTranslation(words.find(word => word._id === rowKey).english);
        setEditId(rowKey);

        toggleSlide();
    }

    // Delete button
    const deleteRow = (rowMap, rowKey) => {
        if (rowMap[rowKey]) {
            rowMap[rowKey].closeRow();
        }
        deleteWord(rowKey)
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
                <SwipeListView
                    showsVerticalScrollIndicator={false}
                    data={listWords}
                    keyExtractor={(word) => word._id}
                    renderItem={({ item }) => {
                        return <WordListItem word={item} />
                    }}
                    rightOpenValue={-170}
                    renderHiddenItem={({ item }, rowMap) => {
                        return (
                            <HiddenItemWithActions
                                data={item}
                                rowMap={rowMap}
                                onEdit={() => editRow(rowMap, item._id)}
                                onDelete={() => deleteRow(rowMap, item._id)}
                                item={item.spanish}
                            />
                        )
                    }}
                />
            </View>

            {/* Hidden WordForm in Slide Screen */}
            <SlideScreen>
                <WordForm
                    headerText={list.title}
                    buttonText={!editWord ? 'Add word' : 'Save word'}
                    onSubmit={onSubmit}
                    editWord={editWord}
                    editTranslation={editTranslation}
                    editId={editId}
                    editListId={list._id}
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

export default connect(mapStateToProps, { saveWord, deleteWord, updateWord, toggleSlide })(WordListScreen);