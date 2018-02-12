import React from 'react';
import {StackNavigator} from 'react-navigation';

import Movies from '../components/movies/Movies';
import MovieDetails from '../components/movies/MovieDetails';
import AllMovies from '../components/movies/AllMovies';
import CastDetails from '../components/common/CastDetails';
import VideoPlayer from '../components/common/VideoPlayer';
import ShareButton from './../components/common/ShareButton';
import * as _ from 'lodash';

import {StackNavHeaderStyles} from '../styles/styles';

// TODO: Fix the shareButton name and id
const MoviesStack = StackNavigator({
  Movies: {
    screen: Movies,
    navigationOptions: {
      title: 'Movies',
      ...StackNavHeaderStyles
    }
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
          name={_.get(params, 'name')}
          type="movie"
          id={_.get(params, 'id')}/>
    })
  },
  AllMovies: {
    screen: AllMovies,
    navigationOptions: ({navigation}) => ({
      title: navigation.state.params.category,
      ...StackNavHeaderStyles
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
  VideoPlayer: {
    screen: VideoPlayer,
    navigationOptions: ({navigation}) => ({
      tabBarVisible: false,
      headerVisible: false,
      ...StackNavHeaderStyles
    })
  }
}, {
  headerMode: 'float',
  cardStyle: {
    backgroundColor: '#4C4C4C'
  }
});

export default MoviesStack;
