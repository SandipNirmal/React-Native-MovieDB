import React, {Component} from 'react';
import {
  View,
  ScrollView,
  Text,
  StyleSheet,
  AsyncStorage
} from 'react-native';
import {Button} from 'react-native-elements';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {
  languageChangeAction, 
  regionChangeAction, 
  themeChangeAction
} from './../../Actions';

import {LaLuneListItem, TouchableListItem} from './../common/ListItem';
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
const settings = ['Language', 'Region', 'Theme'];

class Settings extends Component {
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
        <ScrollView style={{marginTop: 20,minHeight: 400}}>
          <Text style={[style.text, style.headingText]}>
            About
          </Text>
          {appInfo.map((info, index) => (
            <LaLuneListItem name={info.name} value={info.value} key={index}/>
          ))}

          <View style={{marginTop: 20}}>
            <Text style={[style.text, style.headingText]}>
              Language and Region
            </Text>

            {settings.map((setting) => (
              <TouchableListItem
                key={setting}
                name={setting}
                onPress={() => this.props.languageChangeAction('en')}/>
              ))}
          </View>
        </ScrollView>
      </View>
    );
  }
}

function mapStateToProps(state) {
  return {
    settings: state.settings
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    languageChangeAction, 
    regionChangeAction, 
    themeChangeAction
    }, dispatch);
}

export default connect(mapStateToProps,mapDispatchToProps)(Settings)
