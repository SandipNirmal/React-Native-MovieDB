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
      ...StackNavHeaderStyles,
      headerRight: <ShareButton
          name={_.get(params, 'movie.name', 'FixThis')}
          type="movie"
          id={+_.get(params, 'movie.id', 'FixThis')}/>
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
      ...StackNavHeaderStyles,
      headerRight: <ShareButton
          name={_.get(params, 'movie.name', 'FixThis')}
          type="tv"
          id={+_.get(params, 'movie.id', 'FixThis')}/>
    })
  },
  CastDetails: {
    screen: CastDetails,
    navigationOptions: ({
      navigation
    }) => ({
      title: navigation.state.params.cast.name,
      ...StackNavHeaderStyles,
      headerRight: <ShareButton 
                      name={navigation.state.params.cast.name}
                      type="person"
                      id={navigation.state.params.cast.id}
                    />
    }),
  },
}, {
  headerMode: 'float',
  cardStyle: {
    backgroundColor: '#181818'
    // backgroundColor: 'rgba(4, 4, 4, 0.6)'  
  }
});

export default SearchStack;
