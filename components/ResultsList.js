import React from 'react'; 
import {View, Text, FlatList, StyleSheet, TouchableOpacity} from 'react-native';
import {withNavigation} from 'react-navigation'

import ResultsDetails from '../components/ResultsDetails'

const ResultsList = (props) => {
    if (!props.results.length) {
        return null;
    }
    const onChangeToSingleScreen = (id)=>{
        props.navigation.navigate('Result',{id: id});
        
    }

    return (
        <View>
            <Text style={styles.title}>{props.title}</Text>
            <FlatList
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            data={props.results}
            renderItem={itemData=>{
                return <TouchableOpacity onPress={()=>{onChangeToSingleScreen(itemData.item.id)}}>
                        <ResultsDetails
                result={itemData.item}/>
                </TouchableOpacity>
                
            }}/>
        </View>
    );
}

const styles= StyleSheet.create({
title :{
fontSize:18,
fontWeight: 'bold',
marginLeft:15,
}
})
export default withNavigation(ResultsList);
