import React from 'react';
import {StackNavigator} from 'react-navigation';

import Movies from '../components/movies/Movies';
import MovieDetails from '../components/movies/MovieDetails';
import AllMovies from '../components/movies/AllMovies';
import CastDetails from '../components/common/CastDetails';
import VideoPlayer from '../components/common/VideoPlayer';
import ShareButton from './../components/common/ShareButton';

import {StackNavHeaderStyles} from '../styles/styles';

const MovieDetailsRoutes = {
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
};

const MoviesStack = StackNavigator(
  {
    Movies: {
      screen: Movies,
      navigationOptions: {
        title: 'Movies',
        ...StackNavHeaderStyles
      }
    },
    AllMovies: {
      screen: AllMovies,
      navigationOptions: ({navigation}) => ({
        title: navigation.state.params.category,
        ...StackNavHeaderStyles
      })
    },
    ...MovieDetailsRoutes,
  },
  {
    headerMode: 'float',
    cardStyle: {
      backgroundColor: '#4C4C4C'
    }
  }
);

export { MovieDetailsRoutes };
export default MoviesStack;
