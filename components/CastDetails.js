import React, {Component} from 'react';
import {View, Text} from 'react-native';

import style, { StackNavHeaderStyles } from '../styles/styles';

export default class CastDetails extends Component {
  //TODO: the back button should ideally show MovieDetails but it isn't
  // doing that even after explicitly setting headerBackTitle: "MovieDetails" 
  // in MovieDetails figure out why

  static navigationOptions = ({navigation}) => ({
    title: navigation.state.params.cast.name,
    ...StackNavHeaderStyles,
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
