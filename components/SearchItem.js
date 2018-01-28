import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';

import {Configuration} from '../data/configuration';

import style from './../styles/styles';

const SearchItem = ({item}) => {
  const secureUrl = Configuration['images']['secure_base_url'];
  const size = Configuration['images'][`poster_sizes`][0];

  const name = item.name || item.title;
  const type = item.media_type;
  const posterUrl = `${secureUrl}${size}${item.poster_path}`;

  return (
    <View style={style.searchItem}>
      <View style={style.searchItemImage}>
        <Image source={{uri: posterUrl}} style={style.searchItemImage}/>
      </View>
      <View flex={style.searchItemData}>
        <Text>{name}</Text>
        <Text>{type}</Text>
      </View>
    </View>
  )
}

export default SearchItem;
