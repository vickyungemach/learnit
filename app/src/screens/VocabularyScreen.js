import React, { useState } from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { SwipeListView } from 'react-native-swipe-list-view';
import { connect } from 'react-redux';
import { saveList, deleteList, updateList } from '../actions/lists';
import { toggleSlide } from '../actions/utils';
import VocabularyItem from '../components/VocabularyItem';
import SearchBar from '../components/SearchBar';
import SlideScreen from '../components/SlideScreen';
import ListForm from '../components/ListForm';
import HiddenItemWithActions from '../components/HiddenItemWithActions';
import WordListItem from '../components/WordListItem';
import WordForm from '../components/WordForm';


const VocabularyScreen = (props) => {
    const { navigation } = props;

    // mapStateToProps & actions/lists, actions/utils
    const { words, lists, search, saveList, deleteList, updateList, toggleSlide } = props


    // Edit state
    const [edit, setEdit] = useState('');
    const [id, setId] = useState('');


    // Save or update list
    const onSubmit = (listname, listId) => {
        if (!edit) {
            saveList(listname);
        } else {
            updateList(listname, listId)
        }

        toggleSlide();
    }


    // SwipeListView visible item
    const renderItem = ({ item }) => {
        const filteredWords = words.filter(word => {
            return word.list.title === item.title
        })
        return <VocabularyItem list={item} words={filteredWords} navigation={navigation} />
    }

    // SwipeListView hidden item
    const renderHiddenItem = ({ item }, rowMap) => {
        return (
            <HiddenItemWithActions
                data={item}
                rowMap={rowMap}
                onEdit={() => editRow(rowMap, item._id)}
                onDelete={() => deleteRow(rowMap, item._id)}
                item={item.title}
            />
        )
    }

    // Edit button
    const editRow = (rowMap, rowKey) => {
        if (rowMap[rowKey]) {
            rowMap[rowKey].closeRow();

            // When sliding down form, wipe edit state
            setId('');
            setEdit('')
        }

        // Open form with list id and list title
        setId(rowKey);
        setEdit(lists.find(list => list._id === rowKey).title)

        toggleSlide();
    }

    // Delete button
    const deleteRow = (rowMap, rowKey) => {
        if (rowMap[rowKey]) {
            rowMap[rowKey].closeRow();

            // Delete list, rowKey = id
            deleteList(rowKey)
        }
    }



    return (
        <>
        
        
                    {/* Header with word count and Add new Word button */}
                    <View style={styles.backgroundHeader}>
                        <View style={styles.header}>
                            <Text style={styles.title}>{words.length} Words</Text>
                            <TouchableOpacity style={styles.addButton}>
                                <Feather name="plus" size={17} color="#f3c74f" />
                                <Text style={styles.addButtonText} onPress={toggleSlide}>Add new list</Text>
                            </TouchableOpacity>
                        </View>
                        <SearchBar />
                    </View>

                    {/* Render lists, filter words to pass into respective list */}
                    <View style={styles.backgroundContent}>
                        <SwipeListView
                            showsHorizontalScrollIndicator={false}
                            data={lists}
                            keyExtractor={(list) => list._id}
                            renderItem={renderItem}
                            renderHiddenItem={renderHiddenItem}
                            rightOpenValue={-170}
                        />
                    </View>

                    <SlideScreen>
                        <ListForm
                            headerText="Create new list"
                            type="list"
                            buttonText="Save list"
                            onSubmit={onSubmit}
                            editList={edit}
                            listId={id}
                        />
                    </SlideScreen>
                </>
    )
}



const styles = StyleSheet.create({

    backgroundHeader: {
        backgroundColor: '#FFF',
        paddingVertical: 50,
        paddingHorizontal: 30,
        paddingBottom: 30
    },

    backgroundContent: {
        backgroundColor: '#fcfcfc',
        flex: 1,
        paddingTop: 15
    },

    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 25
    },

    title: {
        color: '#f3c74f',
        fontSize: 27,
        fontFamily: 'lato-black'
    },

    addButton: {
        flexDirection: 'row'
    },

    addButtonText: {
        color: '#f3c74f',
        fontSize: 15,
        fontWeight: '500',
        marginLeft: 5
    }
})


const mapStateToProps = state => ({
    words: state.words.words,
    lists: state.lists.lists,
    search: state.utils.searchTerm
})



export default connect(mapStateToProps, { saveList, toggleSlide, deleteList, updateList })(VocabularyScreen)

