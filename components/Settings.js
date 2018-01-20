import React, {Component} from 'react';
import {
  View,
  ScrollView,
  Text,
  StyleSheet,
  AsyncStorage,
  Picker
} from 'react-native';
import {Button} from 'react-native-elements';

import style from './../styles/styles';

const SETTINGS_KEY = 'Settings'

export default class Movies extends Component {

constructor(props) {
  super(props);
  this.state = {
    language: 'IN-hi',
    region: 'IN',
    theme: 'dark'
  }

  this._initSettings();
}

async _initSettings() {
  const settings = JSON.parse(await AsyncStorage.getItem(SETTINGS_KEY)) || {
    language: 'IN-hi',
    region: 'IN' 
  };
  
  this.setState({
    language: settings.language,
    region: settings.region
  });
}

saveSettings() {
  AsyncStorage.setItem(SETTINGS_KEY, JSON.stringify(this.state));
}

render() {
  return (
      <View>
        <ScrollView>
          <Text style={[style.titleText]}> Setings </Text>
          <Text style={[style.headingText]}>Select Language</Text>
          <Picker
            selectedValue={this.state.language}
            onValueChange={(itemValue, itemIndex) => this.setState({language: itemValue})}>
            <Picker.Item label="English" value="US-en" />
            <Picker.Item label="Hindi" value="IN-hi" />
          </Picker>
          <Text>{this.state.language}</Text>

          <Text style={[style.headingText]}>Select Region</Text>
          <Picker
            selectedValue={this.state.region}
            onValueChange={(itemValue, itemIndex) => this.setState({region: itemValue})}>
            <Picker.Item label="US" value="US" />
            <Picker.Item label="India" value="IN" />
          </Picker>
          <Text>{this.state.region}</Text>

          <Button title='Save Settings' />
        </ScrollView>
      </View>
    );
  }
}
