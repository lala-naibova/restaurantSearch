import React from 'react';
import {View, Image, Text, StyleSheet} from 'react-native'

const ResultsDetails = (props) => {

    return (
        <View >
            <View style={styles.card}>
                <Image style={styles.image}
                source={{uri: props.result.image_url}}/>
                <Text style={styles.name}>{props.result.name}</Text>
                <Text style={styles.details}>{props.result.rating} Starts, {props.result.review_count} Reviews</Text>
            </View>  
        </View>
    );
}
const styles= StyleSheet.create({
image:{
    width:250,
    height:200,
    borderRadius :15,
    marginBottom:5
    
},
card:{
    marginLeft:15,
    marginBottom:5
},
name:{
    fontWeight:'bold'
},
details:{
    color:'grey'
}
})
export default ResultsDetails;
