import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import RankingItem from '../components/RankingItem'

const RankingScreen = () => {
    return (
        <>
            <View style={styles.backgroundHeader}>
                <Text style={styles.title}>Ranking</Text>

            </View>

            <View style={styles.backgroundContent}>
                <RankingItem emoji="🎓" title="Graduated" count="130" color="#40D642" />
                <RankingItem emoji="🍾" title="Almost there" count="76" color="#55E659"/>
                <RankingItem emoji="♠️" title="Acing it" count="12" color="#96EC4E" />
                <RankingItem emoji="✨" title="Getting pretty good" count="40" color="#FFEA03" />
                <RankingItem emoji="🎩" title="Keep going" count="88" color="#FFDA36" />
                <RankingItem emoji="🏳" title="Half way there" count="123" color="#FFC71E" />
                <RankingItem emoji="💎" title="Getting there" count="72" color="#FFAE36" />
                <RankingItem emoji="📖" title="Needs some work" count="99" color="#FF7736" />
                <RankingItem emoji="🗝" title="Recently learned" count="170" color="#FF3938" />
                <RankingItem emoji="🧊" title="Getting started" count="143" color="#ED1D1B" />
            </View>
        </>
    )
}

export default RankingScreen

const styles = StyleSheet.create({

    backgroundHeader: {
        padding: 30,
        paddingTop: 50
    },

    backgroundContent: {
        flex: 1,
        marginTop: 10
    },

    title: {
        color: '#413d3d',
        fontSize: 24,
        fontFamily: 'lato-black',
        marginBottom: 7
    },
})
