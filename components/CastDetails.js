import React, {Component} from 'react';
import {View, Text} from 'react-native';

export default class CastDetails extends Component {
  //TODO: the back button should ideally show MovieDetails but it isn't
  // doing that even after explicitly setting headerBackTitle: "MovieDetails" 
  // in MovieDetails figure out why

  static navigationOptions = ({navigation}) => ({
    title: navigation.state.params.cast.name,
    headerTitleStyle: {
      color: '#a9a9a9'
    },
    headerStyle: {
      backgroundColor: 'black'
    },
    headerTintColor: '#32CD32',
  });

  render() {
    return (
      <View>
        <Text>
          Show Cast Details Here
        </Text>
      </View>
    )
  }
}
