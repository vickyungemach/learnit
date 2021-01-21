import React, { useEffect } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import book from '../../assets/icons/book-icon.png';
import bubble from '../../assets/icons/speechbubble-icon.png';
import { Feather } from '@expo/vector-icons';
import { connect } from 'react-redux';
import { getWords } from '../actions/words';
import { getLists } from '../actions/lists';
import { getReview } from '../actions/review';
import FooterItem from '../components/FooterItem';



const HomeScreen = (props) => {
    const { navigation } = props;

    // actions
    const { getWords, getLists, getReview } = props;

    // mapStateToProps
    const { words: { loading, words }, review: { list } } = props;

    // Refresh review list when HomeScreen is focused
    navigation.addListener('didFocus', () => {
        getReview();
      }
    );

    // Load all words and lists
    useEffect(() => {
        getWords();
        getLists();
        getReview();
    }, [])


    const goldCircle = (
        <TouchableOpacity onPress={() => {navigation.navigate('Ranking')}}>
            <View style={styles.circle}>
                <Image style={styles.image} source={require('../../assets/gold-circle.png')} />
                <Text style={styles.writing}>All done!</Text>
                <Text style={[styles.tag, styles.allDone]}>{words.length} Words  ✓</Text>
            </View>
        </TouchableOpacity>
    )

    const silverCircle = (

        <TouchableOpacity onPress={() => {
            navigation.navigate('ReviewI')
        }}>
            <View style={styles.circle}>
                <Image style={styles.image} source={require('../../assets/silver-circle.png')} />
                <Text style={styles.writing}>Review!</Text>
                <Text style={[styles.tag, styles.review]}>
                    <Feather name="book-open" size={18} color="#fcc200" />  {list && list.length}
                </Text>
            </View>
        </TouchableOpacity>

    )


    return (
        <>
            {
                !loading && (
                    <>
                        {/* Golden circle when review = 0, otherwise silver circle */}
                        <View style={styles.main}>
                            {
                                !list.length ? goldCircle : silverCircle
                            }
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

    writing: {
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
        paddingHorizontal: 13,
        paddingVertical: 7,
        borderRadius: 7,
        borderWidth: 1,
        borderColor: 'white',
        overflow: "hidden",
        fontFamily: 'lobstertwo-bold',
        fontSize: 16
    },

    allDone: {
        backgroundColor: '#E8C157',
        color: 'white'
    },

    review: {
        // backgroundColor: '#f8e1e1',
        // color: 'lightcoral',
        backgroundColor: '#fff4d5',
        color: '#fcc200',
        right: 15,
        borderColor: '#fcc200'
    }
})



const mapStateToProps = state => ({
    words: state.words,
    review: state.review
})

export default connect(mapStateToProps, { getWords, getLists, getReview })(HomeScreen)