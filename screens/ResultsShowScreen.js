import React,{useState, useEffect} from 'react';
import {View, Image, StyleSheet, Text, FlatList} from 'react-native';

import yelp from '../api/yelp'

const ResultsShowScreen = (props) => {
    const currId = props.navigation.getParam('id');
    const [result, setResult] = useState(null);
    const getresult = async (id)=>{
       const response  = await yelp.get(`${id}`);
       setResult(response.data);
    }
    useEffect(()=>{
        getresult(currId);
    },[]);

    if (!result) {
       return null; 
    }
    return (
        <View>
            <Text style={styles.name}>{result.name}</Text>
            <FlatList
            keyExtractor={photo=>photo}
            data={result.photos}
            renderItem={itemData=>{
                return <Image style={styles.image}
                source={{uri : itemData.item}}/>
            }}/>
        </View>
        
    );
}
const styles= StyleSheet.create({
image:{
    width:300,
    height:250,
    marginHorizontal :40,
    marginBottom:10
},
name:{
    fontSize:18,
    fontWeight:'bold',
    textAlign:'center',
    paddingVertical:16
}
})
export default ResultsShowScreen;
