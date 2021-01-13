import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


const RankingItem = (props) => {
    // RankingScreen props
    const { emoji, title, count, color } = props
    
    return (
        <View style={styles.container}>

            {/* Emoji and level name */}
            <View style={styles.level}>
                <Text style={styles.levelEmoji}>{emoji}</Text>
                <Text style={styles.levelTitle}>{title}</Text>
            </View>
            
            {/* Word count tag */}
            <View style={[styles.count, {backgroundColor: color}]}>
                <Text style={styles.countTag}>{count}</Text>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({

    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 30,
        paddingVertical: 7,
        paddingRight: 35
    },

    level: {
        flexDirection: 'row'
    },

    levelEmoji: {
        fontSize: 17
    },

    levelTitle: {
        fontFamily: 'lato-regular',
        marginLeft: 15,
        fontSize: 15
    },

    count: {
        borderRadius: 5,
        paddingHorizontal: 12,
        paddingVertical: 7,
        width: 50,
        alignItems: 'center'
    }, 

    countTag: {
        fontFamily: 'lato-black',
        color: '#fff'
    } 
})


export default RankingItem;