import React, { Component } from 'react';
import {
  Text,
  View,
} from 'react-native';

import style from './../styles/styles';

class AllMovies extends Component {
  static navigationOptions = ({navigation}) => ({
    title: navigation.state.params.category,
    headerTitleStyle: {
      color: '#a9a9a9'
    },
    headerStyle: {
      backgroundColor: 'black'
    },
  });

  render() {
    return(
      <View>
        <Text style={[style.text, style.normalText]}>
          Show All Movies here
        </Text>
      </View>
    )
  }
}

export default AllMovies;
