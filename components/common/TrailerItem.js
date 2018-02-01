import React from 'react';
import {Text, View, TouchableOpacity,} from 'react-native';
import {Icon} from 'react-native-elements';

import style from '../../styles/styles';

const TrailerItem = ({video, onPlay}) => {
  return (
    <View>
      <Text style={[style.text, style.normalText, style.trailerTitle]}>
        {video.name}		
      </Text>
      <TouchableOpacity onPress={() => {onPlay(video.url)}}>
        <View 
          style={[style.backdropSize, style.centerContentContainer, style.trailerContainer]}>		
          <Icon 
              name='youtube-play' 
              type='font-awesome'
              size={50} 
              color='#ff0000' 
              style={style.trailerPlayIcon}/>		
        </View>
      </TouchableOpacity>
    </View>
  )
}

export default TrailerItem;
