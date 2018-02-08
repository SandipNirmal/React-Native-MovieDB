import React from 'react';
import {View, Text} from 'react-native';

import style from './../../styles/styles';

const LaLuneListItem = (props) => {
  return (
    <View style={style.listContainer}>
      <View style={style.listTitle}>
        <Text style={[style.text, style.subHeadingText]}>
          {props.name}
        </Text>
      </View>
      <View style={style.listValue}>
        <Text style={[style.text, style.normalText]}>
          {props.value}
        </Text>
      </View>
    </View>
  )
}

export default LaLuneListItem;
