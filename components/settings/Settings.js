import React, {Component} from 'react';
import { View, ScrollView, Text, Button } from 'react-native';
import { NavigationActions } from 'react-navigation';
import { connect } from 'react-redux';

import { fetchSettingsAction } from './../../Actions';
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
const settings = ['Language', 'Region', 'Theme'];

class Settings extends Component {
  componentDidMount() {
    this.props.fetchSettingsAction();
  }

  // changeTheme = () => {
  //   const theme = (this.props.settings.theme === 'dark')
  //     ? 'light'
  //     : 'dark';
  //   this.props.saveSettingsAction({...this.props.settings, theme:theme });
  // }

  render() {
    return (
      <View>
        <ScrollView
          style={{
          marginTop: 20,
          minHeight: 400
        }}>
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
                onPress={() => {
                  this.props.navigation.dispatch(NavigationActions.navigate({
                    routeName: `${setting}Settings`,
                    params: {
                      selected: this.props.settings[setting.toLowerCase()]
                    }
                  }))}}/>
            ))}
          </View>
        </ScrollView>
      </View>
    );
  }
}

function mapStateToProps({settings}) {
  return {
    settings
  }
}

export default connect(mapStateToProps, {
  fetchSettingsAction}
)(Settings);
