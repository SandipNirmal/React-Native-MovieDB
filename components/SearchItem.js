import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';

import {Configuration} from '../data/configuration';

import style from './../styles/styles';

const SearchItem = ({item}) => {
  const secureUrl = Configuration['images']['secure_base_url'];
  const name = item.name || item.title;
  const type = item.media_type;
  const size = (type !== 'person') ? 
    Configuration['images'][`poster_sizes`][0] :
    Configuration['images'][`profile_sizes`][0];

  const posterUrl = `${secureUrl}${size}${type === 'person' ? item.profile_path : item.poster_path}`;

  return (
    <View style={style.searchItem}>
      <View style={[style.searchItemImage, style.imagePlaceholder]}>
        <Image source={{uri: posterUrl}} style={style.searchItemImage}/>
      </View>
      <View style={style.searchItemData}>
        <Text>{name}</Text>
        <Text>{type}</Text>
      </View>
    </View>
  )
}

export default SearchItem;
