import React, { Component } from 'react';
import {
  Text,
  View,
} from 'react-native';

import style from './../styles/styles';

class AllMovies extends Component {
  static navigationOptions = ({navigation}) => ({
    title: navigation.state.params.category,
    headerTitleStyle: style.headerTextColor,
    headerStyle: style.headerBackground,
    headerTintColor: style.headerTintColor,
  });

  render() {
    return(
      <View style={style.screenBackgroundColor}>
        <Text style={[style.text, style.normalText]}>
          Show All Movies here
        </Text>
      </View>
    )
  }
}

export default AllMovies;
