import React, { Component } from 'react';
import {
  ActivityIndicator,
  Text,
  StyleSheet,
  View,
} from 'react-native';
import { Avatar } from 'react-native-elements';
import Constant from './../utilities/constants';
import * as _ from 'lodash';

import style, { primaryColor, StackNavHeaderStyles } from '../styles/styles';


class SplashScreen extends Component {
  static navigationOptions = {};

  constructor(props) {
    super(props);
    this.state = {
      "isLoading": true,
    }
  }

  componentDidMount() {
    const baseUrl = Constant.api_base_url + '/movie/';
    const apiKey = Constant.api_key;
    const language = "language=en-US";
    const uri = `${baseUrl}now_playing?${apiKey}&${language}&page=1`;

    fetch(uri).then((response) => response.json()).then((response) => {
      if (_.get(this, 'props.navigation.navigate')) {
        this.props.screenProps = {movies: response.results}
        this.props.navigation.navigate('MainScreen', {movies: response.results});
      }
    }).catch(error => console.error(error))
  }

  render() {
    return(
      <View style={[style.centerContentContainer, style.screenBackgroundColor]}>
      <Avatar
          xlarge
          rounded
          containerStyle={{backgroundColor: primaryColor}}
          title="L"
          titleStyle={{fontWeight: '900', fontSize: 100}}
        />
        <Text style={[style.appName, style.startupScreenTextProps]}>
          LaLune
        </Text>
        <View style={{marginTop: 50, marginBottom: 50}}>
          <ActivityIndicator
            size="large"
            color={primaryColor}
          />
        </View>
        <Text style={[style.titleText, style.startupScreenTextProps]}>
          For everyone in love with movies and TV Shows
        </Text>
      </View>
    )
  }
};

export default SplashScreen;
