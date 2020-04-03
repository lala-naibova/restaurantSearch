import React from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native'
import {Feather} from '@expo/vector-icons'

const SearchBar = (props) => {
    return (
        <View style={styles.backGround}>
            <Feather name='search' style={styles.iconSize}/>
            <TextInput 
            autoCapitalize = 'none'
            autoCorrect={false}
            value={props.term}
            style={styles.input}
            placeholder='Search'
            onChangeText={props.onChangeTerm}
            onEndEditing={props.onSubmitTerm}/>
        </View>
    );
}
const styles = StyleSheet.create({
    backGround :{
        backgroundColor: '#f0eeee',
        height :50,
        borderRadius :5,
        margin :15,
        flexDirection:'row',
    },
    input:{
        flex:1,
        fontSize:18
    },
    iconSize:{
        fontSize:35,
        alignSelf:'center',
        marginHorizontal:15
    }
})
export default SearchBar;
