import React from 'react';
import {StackNavigator} from 'react-navigation';

import Movies from '../components/movies/Movies';
import MovieDetails from '../components/movies/MovieDetails';
import AllMovies from '../components/movies/AllMovies';
import CastDetails from '../components/common/CastDetails';
import VideoPlayer from '../components/common/VideoPlayer';
import ShareButton from './../components/common/shareButton';
import * as _ from 'lodash';

import { StackNavHeaderStyles } from '../styles/styles';

const MoviesStack = StackNavigator({
    Movies: {
      screen: Movies,
      navigationOptions: {
        title: 'Movies',
        ...StackNavHeaderStyles,
      },
    },
    MovieDetails: {
      screen: MovieDetails,
      navigationOptions: ({navigation: {state: {params}}}) => ({
        ...StackNavHeaderStyles,
        headerRight: <ShareButton 
                      name={_.get(params, 'movie.name', 'FixThis')}
                      type="movie"
                      id={_.get(params, 'movie.id', 'FixThis')}
                    />
      }),
    },
    AllMovies: {
      screen: AllMovies,
      navigationOptions: ({navigation}) => ({
        title: navigation.state.params.category,
        ...StackNavHeaderStyles,
      }),
    },
    CastDetails: {
      screen: CastDetails,
      navigationOptions: ({navigation}) => ({
        title: navigation.state.params.cast.name,
        ...StackNavHeaderStyles,
        headerRight: <ShareButton 
                      name={navigation.state.params.cast.name}
                      type="person"
                      id={navigation.state.params.cast.id}
                    />
      }),
    },
    VideoPlayer: {
      screen: VideoPlayer,
      navigationOptions: ({navigation}) => ({
        tabBarVisible: false,
        headerVisible: false,
        ...StackNavHeaderStyles,
      }),
    }
  },
  {
    headerMode: 'float',
    cardStyle: {
      backgroundColor: '#4C4C4C'
    }
  }
);

export default MoviesStack;
