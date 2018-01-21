import {StackNavigator} from 'react-navigation';

import Settings from './../components/Settings';
import {StackNavHeaderStyles} from '../styles/styles';

const SettingsStack = StackNavigator({
  Settings: {
    screen: Settings,
    navigationOptions: {
      title: 'Settings',
      ...StackNavHeaderStyles,
    }
  }
}, {
  headerMode: 'float',
  cardStyle: {
    backgroundColor: '#4C4C4C'
  }
});

export default SettingsStack;
