import React from 'react';
import {View, ScrollView, TouchableOpacity, Text} from 'react-native';

import style from './../styles/styles';
import SearchItem from './SearchItem';

const SearchResult = (props) => {
  return (
    <View>
      <ScrollView style={style.searchResult}>
      {props.items.map((item, index) => (
          <TouchableOpacity key={index} onPress={() => {props.onSelect(item)}}>
            <SearchItem item={item}/>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}

export default SearchResult;
