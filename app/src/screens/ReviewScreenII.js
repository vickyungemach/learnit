import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const ReviewScreenII = () => {
    return (
        <>
            <View style={styles.backgroundHeader}>
                <Text style={styles.word}>candle</Text>
            </View>

            <View style={styles.backgroundContent}>
                <View style={styles.rowTop}>
                    <View style={styles.cube}>
                        <Text style={styles.cubeText}>la varita</Text>
                    </View>

                    <View style={styles.cube}>
                        <Text style={styles.cubeText}>la alma</Text>
                    </View>
                </View>

                <View style={styles.rowBottom}>
                    <View style={styles.cube}>
                        <Text style={styles.cubeText}>merecer</Text>
                    </View>
                    <View style={styles.cube}>
                        <Text style={styles.cubeText}>la vela</Text>
                    </View>
                </View>


            </View>
        </>
    )
}

export default ReviewScreenII

const styles = StyleSheet.create({

    backgroundHeader: {
        backgroundColor: '#fff',
        paddingVertical: 60,
        alignItems: 'center',
        // marginLeft: 73
    },

    backgroundContent: {
        backgroundColor: '#fcfcfc',
        flex: 1
    },

    rowTop: {
        flexDirection: 'row',
        flex: 1,
        alignItems: 'flex-end',
        justifyContent: 'center'
    },

    rowBottom: {
        flexDirection: 'row',
        flex: 1,
        alignItems: 'flex-start',
        justifyContent: 'center'
    },

    word: {
        fontFamily: 'lato-black',
        fontSize: 35,
        color: '#f3c74f'
    },

    cube: {
        backgroundColor: '#fff',
        width: '45%',
        height: '88%',
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
        margin: 6,

        // borderWidth: 2,
        // borderColor: '#f1eeee'

        shadowColor: "#1f2023",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2,
        elevation: 0
    },

    cubeText: {
        fontFamily: 'lato-regular',
        fontSize: 16,
        color: '#413d3d'
    }
})
