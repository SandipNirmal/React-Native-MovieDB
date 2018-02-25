import React, { Component } from 'react'
import {View, Text} from 'react-native'
import { connect } from 'react-redux'

import { fetchSettingsAction } from './../../Actions'
import {TouchableListItem} from './../common/ListItem'
import style from './../../styles/styles'

class SettingDetails extends Component {

  componentDidMount() {
    this.props.fetchSettingsAction();
  }

  render() {
    const {name, values, onSelect} = this.props.navigation.state.params;
    const selected = this.props.settings[name.toLowerCase()];

    return (
      <View>
        <Text style={[style.Text, style.subHeading]}>
          {name}
          Settings
        </Text>
  
        {values.map((value) => (
        <TouchableListItem
          key={value}
          name={value}
          selected={selected}
          onPress={() => { onSelect(name.toLowerCase(), value)}}
          />))}
      </View>
    )
  }
}

function mapStateToProps({settings}) {
  return {settings}
}

export default connect(mapStateToProps, {fetchSettingsAction})(SettingDetails);
