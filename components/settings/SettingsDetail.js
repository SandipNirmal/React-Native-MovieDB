import React from 'react'
import {View, Text} from 'react-native'
import {TouchableListItem} from './../common/ListItem'

import style from './../../styles/styles'

const SettingDetails = ({navigation}) => {
  const {name, values, selected, onSelect} = navigation.state.params;
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

export default SettingDetails;
