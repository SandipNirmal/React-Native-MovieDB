import React from 'react';
import {ScrollView} from 'react-native';

import EpisodeItem from './EpisodeItem';
const episodes = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const EpisodeList = (props) => {
  return (
    <ScrollView>
      {episodes.map((episode, index) => (
        <EpisodeItem episode_number={episode} key={index}/>
      ))}
    </ScrollView>
  )
}

export default EpisodeList;
