import React from 'react';
import {View, Text, Image} from 'react-native';

import {Configuration} from './../../data/configuration';
import style from './../../styles/styles';

const EpisodeItem = ({data}) => {
  const {name, overview, still_path, episode_number} = data;

  const baseUrl = Configuration['images']['secure_base_url'];
  const size = Configuration['images']['still_sizes'][1]
  const episodeImg = `${baseUrl}${size}/${still_path}`;

  return (
    <View style={style.episodeItem}>
      <View style={style.episodePosterContainer}>
        <Image
          style={style.episodePoster}
          source={{uri: episodeImg}}
        />
      </View>
      <View style={style.episodeDesc}>
        <Text style={[style.text, style.subHeadingText]}>{name}</Text>
        <Text style={[style.secondaryText, style.normalText]}>Episode #{episode_number}</Text>            
        <Text style={[style.text, style.normalText]}>{overview}</Text>
      </View>
    </View>
  )
}

export default EpisodeItem;
