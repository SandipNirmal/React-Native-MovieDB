import React, {Component} from 'react';
import {View, Text} from 'react-native';

import style from '../styles/styles';

export default class CastDetails extends Component {
  //TODO: the back button should ideally show MovieDetails but it isn't
  // doing that even after explicitly setting headerBackTitle: "MovieDetails" 
  // in MovieDetails figure out why

  static navigationOptions = ({navigation}) => ({
    title: navigation.state.params.cast.name,
    headerTitleStyle: style.headerTextColor,
    headerStyle: style.headerBackground,
    headerTintColor: style.headerTintColor,
  });

  render() {
    return (
      <View style={style.screenBackgroundColor}>
        <Text>
          Show Cast Details Here
        </Text>
      </View>
    )
  }
}
