import React from 'react'
import {View, ScrollView, TouchableOpacity, Text} from 'react-native'

import style from '../../styles/styles'
import SearchItem from './SearchItem'

// TODO - Rewrite using react-native-elements List, ListItem
const SearchResult = ({items, popular, config, onSelect}) => {
  return (
    <View>
      <ScrollView style={style.searchResult}>
        {items.length ? 
        items.map((item, index) => (
          <TouchableOpacity key={index} onPress={() => { onSelect(item) }}>
            <SearchItem item={item} config={config} />
          </TouchableOpacity>
        ))
        :
        popular.map((popular) => (
          // TODO - add seperate component for popular searches 
          <Text style={[style.text, style.normalText]} key={popular.id}>{popular.title}</Text>
        ))
      }
      </ScrollView>
    </View>
  )
}

export default SearchResult
