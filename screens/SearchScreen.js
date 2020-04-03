import React,{useState} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native'

import SearchBar from '../components/SearchBar'
import ResultsList from '../components/ResultsList'
import useResults from '../hooks/useResult'

const SearchScreen = () => {
    const [term, setTerm] = useState('');
    const [serachApi, results, errorMessage] = useResults();

    const filterResultByPrice = (price)=>{
        return results.filter(item=> {
            return item.price === price});
    }
    return (
        <View style={styles.screen}>
            <SearchBar term={term} 
            onChangeTerm={setTerm}
            onSubmitTerm={()=>serachApi(term)}/>
            {errorMessage? <Text>{errorMessage}</Text> : null}
            <ScrollView>
                <ResultsList
                results = {filterResultByPrice('$')} 
                title='Cost Effective'
                />
                <ResultsList 
                results = {filterResultByPrice('$$')} 
                title='Bit Pricier'
                />
                <ResultsList 
                results = {filterResultByPrice('$$$')} 
                title='Big Spender!'
                />
            </ScrollView>           
        </View>
    );
}
const styles= StyleSheet.create({
screen:{
    backgroundColor:'white',
    flex:1
}
})
export default SearchScreen;
