import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

import style from './../../styles/styles';

const ListItem = (props) => {
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
  );
}

const LaLuneListItem = (props) => {
  const {name, value} = props;
  return (
    <View>
      <ListItem name={name} value={value}/>
    </View>
  )
}

const TouchableListItem = (props) => {
  const {name, value} = props;
  return (
    <TouchableOpacity style={style.listContainer} onPress={props.onPress}>
      <ListItem name={name} value={value}/>
    </TouchableOpacity>
  );
}

export {
  LaLuneListItem,
  TouchableListItem
};
