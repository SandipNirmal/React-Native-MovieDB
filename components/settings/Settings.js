import React, {Component} from 'react';
import {
  View,
  ScrollView,
  Text,
  StyleSheet,
  AsyncStorage,
  Picker
} from 'react-native';
import {Button, List, ListItem} from 'react-native-elements';
import LaLuneListItem from './../common/ListItem';

import style from './../../styles/styles';

const SETTINGS_KEY = 'Settings'

const appInfo = [
  {
    name: 'App Name',
    value: 'La Lune'
  }, {
    name: 'App Version',
    value: '0.0.1'
  }
];

const settings = ['Language', 'Region'];

export default class Settings extends Component {

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

    this.setState({language: settings.language, region: settings.region});
  }

  saveSettings() {
    AsyncStorage.setItem(SETTINGS_KEY, JSON.stringify(this.state));
  }

  render() {
    return (
      <View>
        {/* <Text style={[style.titleText]}> Setings </Text>
          <Text style={[style.headingText]}>Select Language</Text>
          <Text>{this.state.language}</Text>

          <Text style={[style.headingText]}>Select Region</Text>
          <Text>{this.state.region}</Text>

          <Button title='Save Settings' /> */}
        {/* <List containerStyle={{marginBottom: 20}}>
          {
            settingList.map((l, i) => (
              <ListItem
                key={i}
                title={l.title}
                // leftIcon={{name: l.icon}}
                hideChevron
                />
            ))
          }
          </List> */}
        <ScrollView
          style={{
          marginTop: 20,
          minHeight: 400
        }}>
          {appInfo.map((info, index) => (
          <LaLuneListItem name={info.name} value={info.value} key={index}/>
        ))}

          <View style={{marginTop: 20}}>
            <Text style={[style.text, style.headingText]}>
              Language and Region
            </Text>

            <List containerStyle={{
              marginBottom: 20, 
              backgroundColor: '#181818', 
              borderTopWidth: 0
              }}>
              {settings.map((setting, i) => (
                <ListItem 
                // style={{color: '#e1e1e1'}} 
                key={i} 
                title={setting}
                // onPressRightIcon={this.props.navigation.navigate(`RegionSettings`)}/>
                // TODO - Add Navigation
                onPressRightIcon={() => {}}/>
              ))}
            </List>
          </View>
        </ScrollView>
      </View>
    );
  }
}
