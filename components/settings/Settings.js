import React, { Component } from 'react';
import { View, ScrollView, Text, Button } from 'react-native';
import { NavigationActions } from 'react-navigation';
import { connect } from 'react-redux';

import { fetchSettingsAction, saveSettingsAction } from './../../Actions'
import { LaLuneListItem, TouchableListItem } from './../common/ListItem';
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

const settings = [
  {
    name: 'Language',
    values: ['IN-hi', 'US-en', 'UK-en']
  }, {
    name: 'Region',
    values: ['IN', 'US', 'UK']
  }, {
    name: 'Theme',
    values: ['Light', 'Dark']
  }
]

class Settings extends Component {
  componentDidMount() {
    this.props.fetchSettingsAction();
  }

  onSettingsChange = (key, value) => {
    let changes = {};
    changes[key] = value;
    this.props.saveSettingsAction(Object.assign({}, this.props.settings, changes));
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

            {settings.map(({name, values}) => (<TouchableListItem
              key={name}
              name={name}
              onPress={() => {
              this.props.navigation.dispatch(NavigationActions.navigate({
                  routeName: 'SettingDetails',
                  params: {
                    name,
                    values,
                    onSelect: this.onSettingsChange
                  }
                }))
            }}/>))}
          </View>
        </ScrollView>
      </View>
    );
  }
}

function mapStateToProps({settings}) {
  return {settings}
}

export default connect(mapStateToProps, { fetchSettingsAction, saveSettingsAction })(Settings);
