import React from 'react'
import {View, Text} from 'react-native'
import {TouchableListItem} from './../common/ListItem'

import style from './../../styles/styles'

const Languages = ['IN-hi', 'US-en', 'UK-en']
const Regions = ['IN', 'US', 'UK']
const Themes = ['Light', 'Dark']

// TODO - Add support to show selected item, right tick
// Support redux action call on item selection

const LanguageSettings = (props) => {
  return (
    <View>
      <Text style={[style.Text, style.subHeading]}>
        Languages Settings
      </Text>

      {Languages.map((setting) => (
        <TouchableListItem
          key={setting}
          name={setting}
          selected={props.navigation.state.params.selected}
          onPress={() => {}} />
      ))}
    </View>
  )
}

const RegionSettings = (props) => {
  return (
    <View>
      <Text style={[style.Text, style.subHeading]}>
        Regions Settings
      </Text>

      {Regions.map((setting) => (
        <TouchableListItem
          key={setting}
          name={setting}
          selected={props.navigation.state.params.selected}
          onPress={() => {}} />
      ))}
    </View>
  )
}

const ThemeSettings = (props) => {
  return (
    <View>
      <Text style={[style.Text, style.subHeading]}>
        Themes Settings
      </Text>

      {Themes.map((setting) => (
        <TouchableListItem
          key={setting}
          name={setting}
          selected={props.navigation.state.params.selected}
          onPress={() => {}} />
      ))}
    </View>
  )
}

export {
  LanguageSettings,
  ThemeSettings,
  RegionSettings
}