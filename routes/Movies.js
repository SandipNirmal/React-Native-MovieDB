import React from 'react';
import {StackNavigator} from 'react-navigation';

import Movies from '../components/movies/Movies';
import MovieDetails from '../components/movies/MovieDetails';
import AllMovies from '../components/movies/AllMovies';
import CastDetails from '../components/common/CastDetails';
import VideoPlayer from '../components/common/VideoPlayer';
import ShareButton from './../components/common/shareButton';

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
      navigationOptions: ({navigation}) => ({
        title: navigation.state.params.item.original_title,
        ...StackNavHeaderStyles,
        headerRight: <ShareButton 
                      name={navigation.state.params.item.original_title}
                      type="movie"
                      id={navigation.state.params.item.id}
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
