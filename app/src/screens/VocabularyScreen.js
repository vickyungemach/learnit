import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, FlatList } from 'react-native';
import SearchBar from '../components/SearchBar';
import { Feather } from '@expo/vector-icons';
import VocabularyItem from '../components/VocabularyItem';
import { connect } from 'react-redux';


const VocabularyScreen = (props) => {
    const { navigation } = props;

    // From mapStateToProps: state.words
    const { words: { allWords, lists }} = props

    return (
        <>
            {/* Header with word count and Add new Word button */}
            <View style={styles.backgroundHeader}>
                <View style={styles.header}>
                    <Text style={styles.title}>{allWords.length} Words</Text>
                    <TouchableOpacity style={styles.addButton}>
                        <Feather name="plus" size={17} color="#f3c74f" />
                        <Text style={styles.addButtonText}>Add new word</Text>
                    </TouchableOpacity>
                </View>
                <SearchBar />
            </View>

            {/* Render lists, filter allWords to pass into respective list  */}
            <View style={styles.backgroundContent}>
                <FlatList
                    showsHorizontalScrollIndicator={false}
                    data={lists}
                    keyExtractor={list => list._id}
                    renderItem={({ item }) => {
                        const words = allWords.filter(word => {
                            return word.list.title === item.title
                        })
                        return <VocabularyItem list={item} words={words} navigation={navigation} />
                    }}
                />
            </View>
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
    words: state.words
})

export default connect(mapStateToProps, {})(VocabularyScreen)