import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import SearchBar from '../Components/SearchBar';
import useResults from '../hooks/useResults';
import ResultList from '../Components/ResultList';

const SearchScreen = () => {
       
      const [term, setTerm ] = useState('');
      const [searchApi, results, errorMessage]= useResults();
        
    console.log(results)    
    const filterResultsByPrice = price =>{
      return results.filter(result => {
        return result.price === price
      })
    }

    return (
      <>
        <SearchBar 
            term={term}
            onTermChange={setTerm}
            onTermSubmit={()=>searchApi(term)}
        />
          {errorMessage ? <Text>{errorMessage}</Text>: null}
          <ScrollView>
            <ResultList results={filterResultsByPrice('€')} title=" Cost Effective" />
            <ResultList results={filterResultsByPrice('€€')} title=" Bit Pricier"/>
            <ResultList results={filterResultsByPrice('€€€')} title=" Big Spender"/>
          </ScrollView>
      </>
    )
}

const styles = StyleSheet.create({});

export default SearchScreen;