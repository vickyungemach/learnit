import React, { useEffect } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import goldCircle from '../../assets/gold-circle.png';
import book from '../../assets/icons/book-icon.png';
import bubble from '../../assets/icons/speechbubble-icon.png';
import { connect } from 'react-redux';
import { getWords } from '../actions/words';
import { getLists } from '../actions/lists';
import FooterItem from '../components/FooterItem';


const HomeScreen = (props) => {
    const { navigation } = props;

    // mapStateToProps & actions/words
    const { words: { loading, words }, getWords, getLists } = props;

    
    // Load all words and lists
    useEffect(() => {
        getWords();
        getLists();
    }, [])


    return (
        <>
            <View style={styles.main}>
                <View style={styles.circle}>
                    <Image style={styles.image} source={goldCircle} />
                    <Text style={styles.allDone}>All done!</Text>
                    <Text style={styles.tag}>{words.length} Words  ✓</Text>
                </View>
            </View>

            {/* Vocabulary Footer */}
            <TouchableOpacity onPress={() => navigation.navigate('Vocabulary')}>
                <FooterItem title="Vocabulary" icon={book} />
            </TouchableOpacity>

            {/* Conjugation Footer */}
            <TouchableOpacity>
                <FooterItem title="Conjugation" icon={bubble} />
            </TouchableOpacity>

        </>
    )
}


const styles = StyleSheet.create({

    main: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    },

    circle: {
        bottom: 50,
        alignItems: 'center',
        justifyContent: 'center'
    },

    image: {
        resizeMode: 'contain',
        height: 240
    },

    allDone: {
        color: 'white',
        position: 'absolute',
        fontSize: 70,
        fontWeight: 'bold',
        fontFamily: 'great-vibes',

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.75,
        shadowRadius: 4.84,
        elevation: 5,
    },

    tag: {
        position: 'absolute',
        right: 0,
        bottom: 40,
        backgroundColor: '#E8C157',
        color: 'white',
        paddingHorizontal: 13,
        paddingVertical: 7,
        borderRadius: 7,
        borderWidth: 1,
        borderColor: 'white',
        overflow: "hidden",
        fontFamily: 'lobstertwo-bold',
        fontSize: 16
    }
})

const mapStateToProps = state => ({
    words: state.words
})

export default connect(mapStateToProps, { getWords, getLists })(HomeScreen)