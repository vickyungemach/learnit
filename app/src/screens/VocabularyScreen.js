import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, FlatList } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { connect } from 'react-redux';
import { saveList } from '../actions/lists';
import { toggleSlide } from '../actions/utils';
import VocabularyItem from '../components/VocabularyItem';
import SearchBar from '../components/SearchBar';
import SlideScreen from '../components/SlideScreen';
import ListForm from '../components/ListForm';


const VocabularyScreen = (props) => {
    const { navigation } = props;

    // mapStateToProps & actions/lists, actions/utils
    const { words, lists, saveList, toggleSlide } = props

    const onSubmit = (listname) => {
        saveList(listname);
        toggleSlide();
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

            {/* Render lists, filter words to pass into respective list  */}
            <View style={styles.backgroundContent}>
                <FlatList
                    showsHorizontalScrollIndicator={false}
                    data={lists}
                    keyExtractor={list => list._id}
                    renderItem={({ item }) => {
                        const filteredWords = words.filter(word => {
                            return word.list.title === item.title
                        })
                        return <VocabularyItem list={item} words={filteredWords} navigation={navigation} />
                    }}
                />
            </View>

            <SlideScreen>
                <ListForm 
                    headerText="Create new list"
                    type="list"
                    buttonText="Add list"
                    onSubmit={onSubmit}
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
    lists: state.lists.lists
})

export default connect(mapStateToProps, { saveList, toggleSlide })(VocabularyScreen)