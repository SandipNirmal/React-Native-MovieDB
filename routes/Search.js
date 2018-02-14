import React from 'react';
import {StackNavigator} from 'react-navigation';

import Search from './../components/search/Search';
import { MovieDetailsRoutes } from './Movies';
import { TvShowDetailsRoutes } from './TvShows';
import ShareButton from './../components/common/ShareButton';

import {StackNavHeaderStyles} from '../styles/styles';

const SearchStack = StackNavigator(
  {
    Search: {
      screen: Search,
      navigationOptions: {
        title: 'Search',
        ...StackNavHeaderStyles
      }
    },
    ...MovieDetailsRoutes,
    ...TvShowDetailsRoutes,
  },
  {
    headerMode: 'float',
    cardStyle: {
      backgroundColor: '#181818'
      // backgroundColor: 'rgba(4, 4, 4, 0.6)'
    }
  }
);

export default SearchStack;
