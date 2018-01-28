import React from 'react';
import {View, ScrollView, TouchableOpacity, Text} from 'react-native';

import SearchItem from './SearchItem';

const SearchResult = (props) => {
  return (
    <View>
      <ScrollView>
      {props.items.map((item, index) => (
          <TouchableOpacity key={index}>
            <SearchItem item={item} />
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}

export default SearchResult;
