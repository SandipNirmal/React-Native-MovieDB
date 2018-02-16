import React, {Component} from 'react';
import {
  View,
  ScrollView,
  Text,
  StyleSheet,
  Button
} from 'react-native';
import {connect} from 'react-redux';

import {
  languageChangeAction, 
  regionChangeAction, 
  themeChangeAction,
  fetchSettingsAction,
  saveSettingsAction
} from './../../Actions';

import {LaLuneListItem, TouchableListItem} from './../common/ListItem';
import style from './../../styles/styles';

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
  componentDidMount() {
    this.props.fetchSettingsAction();
  }

  changeTheme = () => {
    const theme = (this.props.settings.theme === 'dark') ? 'light' : 'dark';
    this.props.themeChangeAction(theme);
  }

  render() {
    const {language, region, theme} = this.props.settings;
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

          <View>
            <Text style={[style.text, style.subHeadingText]}>
              Added For Testing Redux
            </Text>
            <Text style={[style.text, style.normalText]}>
              Language : {language}
            </Text>
            <Text style={[style.text, style.normalText]}>
              Region : {region}
            </Text>
            <Text style={[style.text, style.normalText]}>
              Theme : {theme}
            </Text>

            <Button
              onPress={this.changeTheme}
              title="Change Theme"
              accessibilityLabel="Changes application theme."
              />
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

export default connect(mapStateToProps, {
  languageChangeAction, 
  regionChangeAction, 
  themeChangeAction,
  fetchSettingsAction,
  saveSettingsAction
})(Settings);
