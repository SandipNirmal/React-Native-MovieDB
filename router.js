import React from 'react';
import {TabNavigator, StackNavigator} from 'react-navigation';
import {Icon} from 'react-native-elements';

import TvShows from './components/TvShows';
import Search from './components/Search';
import Settings from './components/Settings';
import MoviesStack from './routes/Movies';

// Application router
export const AppRoot = TabNavigator({
  Movies: {
    screen: MoviesStack,
    navigationOptions: {
      tabBarLabel: 'Movies',
      tabBarIcon: ({tintColor}) => <Icon name="movie" size={30} color={tintColor}/>,
    }
  },
  TvShows: {
    screen: TvShows,
    navigationOptions: {
      tabBarLabel: 'TV Shows',
      tabBarIcon: ({tintColor}) => <Icon name="tv" size={30} color={tintColor}/>
    }
  },
  Search: {
    screen: Search,
    navigationOptions: {
      tabBarLabel: 'Search',
      tabBarIcon: ({tintColor}) => <Icon name="search" size={30} color={tintColor}/>
    }
  },
  Settings: {
    screen: Settings,
    navigationOptions: {
      tabBarLabel: 'Settings',
      tabBarIcon: ({tintColor}) => <Icon name="settings" size={30} color={tintColor}/>
    }
  }
}, {
  tabBarOptions: {
    activeTintColor: '#32CD32',
    inactiveTintColor: '#a9a9a9',
    style: {
      backgroundColor: '#040404'
    }
  }
});
