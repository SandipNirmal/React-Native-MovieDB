import {StackNavigator} from 'react-navigation'

import Settings from './../components/settings/Settings'
import {LanguageSettings, RegionSettings, ThemeSettings} from './../components/settings/SettingsDetail'
import {StackNavHeaderStyles} from '../styles/styles'

const SettingsStack = StackNavigator({
  Settings: {
    screen: Settings,
    navigationOptions: {
      title: 'Settings',
      ...StackNavHeaderStyles
    }
  },
  LanguageSettings: {
    screen: LanguageSettings,
    navigationOptions: {
      title: 'Choose Language',
      ...StackNavHeaderStyles
    }
  },
  RegionSettings: {
    screen: RegionSettings,
    navigationOptions: {
      title: 'Choose Region',
      ...StackNavHeaderStyles
    }
  },
  ThemeSettings: {
    screen: ThemeSettings,
    navigationOptions: {
      title: 'Choose Theme',
      ...StackNavHeaderStyles
    }
  }
}, {
  headerMode: 'float',
  cardStyle: {
    backgroundColor: '#181818'
  }
})

export default SettingsStack
