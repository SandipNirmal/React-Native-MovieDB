import React from 'react';
import {TabNavigator, StackNavigator} from 'react-navigation';
import {Icon} from 'react-native-elements';

import Movies from './components/movies';
import MovieDetails from './components/movieDetails';
import TvShows from './components/tvShows';
import Search from './components/search';
import Settings from './components/settings';

// Movies Screen Stack Navigator
const moviesScreen = StackNavigator({
  Movie: {
    screen: Movies,
    navigationOptions: {
      title: 'Movies',
      headerTitleStyle: {
        color: '#a9a9a9'
      },
      headerStyle: {
        backgroundColor: 'black'
      }
    }
  },
  MovieDetails: {
    screen: MovieDetails,
    navigationOptions: {
      title: 'Movie Details',
      headerTitleStyle: {
        color: '#a9a9a9'
      },
      headerStyle: {
        backgroundColor: 'black'
      }
    }
  }
}, {
  headerMode: 'float',
  cardStyle: {
    backgroundColor: '#4a4a4a'
  }
});

// Application router
export const AppRoot = TabNavigator({
  Movies: {
    screen: moviesScreen,
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
    activeTintColor: '#dedede',
    inactiveTintColor: '#a9a9a9',
    style: {
      backgroundColor: 'black'
    }
  }
});
