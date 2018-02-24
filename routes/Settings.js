import {StackNavigator} from 'react-navigation'

import Settings from './../components/settings/Settings'
import SettingDetails from './../components/settings/SettingsDetail'
import {StackNavHeaderStyles} from '../styles/styles'

const SettingsStack = StackNavigator({
  Settings: {
    screen: Settings,
    navigationOptions: {
      title: 'Settings',
      ...StackNavHeaderStyles
    }
  },
  SettingDetails: {
    screen: SettingDetails,
    navigationOptions: ({
      navigation: {
        state: {
          params
        }
      }
    }) => ({
      title: `Choose ${params.name}`,
      ...StackNavHeaderStyles
    })
  }
}, {
  headerMode: 'float',
  cardStyle: {
    backgroundColor: '#181818'
  }
})

export default SettingsStack
