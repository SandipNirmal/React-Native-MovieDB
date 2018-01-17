import React, { Component } from 'react';
import {
  ActivityIndicator,
  Text,
  StyleSheet,
  View,
} from 'react-native';
import { Avatar } from 'react-native-elements';
import style from '../styles/styles';

const textColor = "#32CD32";

const StartupScreen = (props) => (
  <View style={[style.centerContentContainer, style.screenBackgroundColor]}>
    <Avatar
      xlarge
      rounded
      containerStyle={{backgroundColor: textColor}}
      title="L"
      titleStyle={{fontWeight: '900', fontSize: 100}}
    />
    <Text style={[style.appName, style.startupScreenTextProps]}>
      LaLune
    </Text>
    <View style={{marginTop: 50, marginBottom: 50}}>
      <ActivityIndicator
        size="large"
        color={textColor}
      />
    </View>
    <Text style={[style.titleText, style.startupScreenTextProps]}>
      For everyone in love with movies and TV Shows
    </Text>
  </View>
)


export default StartupScreen;
