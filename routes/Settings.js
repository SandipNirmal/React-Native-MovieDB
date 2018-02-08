import {StackNavigator} from 'react-navigation';

import Settings from './../components/settings/Settings';
import RegionSettings from './../components/settings/RegionSettings';
import LanguageSettings from './../components/settings/LanguageSettings';
import {StackNavHeaderStyles} from '../styles/styles';

const SettingsStack = StackNavigator({
  Settings: {
    screen: Settings,
    navigationOptions: {
      title: 'Settings',
      ...StackNavHeaderStyles,
    }
  },
  LanguageSettings: {
    screen: LanguageSettings,
    navigationOptions: {
      title: 'Choose Language',
      ...StackNavHeaderStyles,
    }
  },
  RegionSettings: {
    screen: RegionSettings,
    navigationOptions: {
      title: 'Choose Region',
      ...StackNavHeaderStyles,
    }
  }
}, {
  headerMode: 'float',
  cardStyle: {
    backgroundColor: '#181818'
  }
});

export default SettingsStack;
