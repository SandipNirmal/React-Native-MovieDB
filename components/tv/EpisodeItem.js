import React from 'react';
import {View, Text} from 'react-native';

const EpisodeItem = (props) => {
  return (
    <View>
      <Text>Episode {props.episode_number}</Text>
    </View>
  )
}

export default EpisodeItem;
