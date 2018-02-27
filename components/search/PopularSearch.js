import React from 'react'

import {View, TouchableOpacity, Text} from 'react-native'
import style from './../../styles/styles'

const PopularSearch = ({data}) => {

  return (
    <View style={[style.popularSearchContainer]}>
      <Text style={[style.text, style.headingText]}>Popular Searches</Text>

      {data.map((popular) => (
        <TouchableOpacity key={popular.id} style={[style.popularSearch]}>
          <Text style={[style.text, style.subHeadingText]}>
            {popular.title}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  )
}

export default PopularSearch;
