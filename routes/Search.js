import React from 'react';
import { StackNavigator } from 'react-navigation';

import Search from './../components/search/Search';
import TvShowDetails from './../components/tv/TvShowDetails';
import MovieDetails from './../components/movies/MovieDetails';
import CastDetails from './../components/common/CastDetails';
import ShareButton from './../components/common/ShareButton';

import { StackNavHeaderStyles } from '../styles/styles';
import * as _ from 'lodash';

// TODO: Fix the shareButton name and id
const SearchStack = StackNavigator({
  Search: {
    screen: Search,
    navigationOptions: {
      title: 'Search',
      ...StackNavHeaderStyles,
    },
  },
  MovieDetails: {
    screen: MovieDetails,
    navigationOptions: ({
      navigation: {
        state: {
          params
        }
      }
    }) => ({
      title: params.name,
      ...StackNavHeaderStyles,
      headerRight: <ShareButton
          name={params.name}
          type="movie"
          id={params.id}/>
    })
  },
  TvShowDetails: {
    screen: TvShowDetails,
    navigationOptions: ({
      navigation: {
        state: {
          params
        }
      }
    }) => ({
      title: params.name,
      ...StackNavHeaderStyles,
      headerRight: <ShareButton
          name={params.name}
          type="tv"
          id={params.id}/>
    })
  },
  CastDetails: {
    screen: CastDetails,
    navigationOptions: ({
      navigation: {
        state: {
          params
        }
      }
    }) => ({
      title: params.name,
      ...StackNavHeaderStyles,
      headerRight: <ShareButton
          name={params.name}
          type="person"
          id={params.id}/>
    })
  },
}, {
  headerMode: 'float',
  cardStyle: {
    backgroundColor: '#181818'
    // backgroundColor: 'rgba(4, 4, 4, 0.6)'  
  }
});

export default SearchStack;
