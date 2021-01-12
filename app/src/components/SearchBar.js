import React from 'react'
import { StyleSheet, TextInput, View, Text } from 'react-native'
import { Ionicons } from '@expo/vector-icons'; 

const SearchBar = ({  }) => {
   
    return (
        
        <View style={styles.background}>
            
            <Ionicons 
                name="search" 
                style={styles.iconStyle} 
                color="darkgrey" 
            />

            <TextInput 
                style={styles.inputStyle} 
                placeholder="Search Vocabulary" 
                
            />

        </View>
    )
}

export default SearchBar

const styles = StyleSheet.create({
    
    background: {
        backgroundColor: '#FFF',
        height: 45,
        borderRadius: 50,
        flexDirection: 'row',
        
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.10,
        shadowRadius: 2.84,
        elevation: 1
         
    },

    inputStyle: {
        flex: 1,
        fontSize: 15,
        fontFamily: 'lato-regular'
    },

    iconStyle: {
        fontSize: 20,
        alignSelf: 'center',
        marginHorizontal: 15
    }
})
