import React, { Component } from 'react';
import { ScrollView, Text, Dimensions } from 'react-native';

import style from '../styles/styles';


class SeasonDetails extends Component {
  render() {
    const { season } = this.props.navigation.state.params;
    return(
      <ScrollView style={style.screenBackgroundColor}>
        <Text style={[style.text, style.headingText]}>
          Season Details go here
        </Text>
      </ScrollView>
    )
  }
}

export default SeasonDetails;


