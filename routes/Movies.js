import {StackNavigator} from 'react-navigation';
import Movies from '../components/Movies';
import MovieDetails from '../components/MovieDetails';
import AllMovies from '../components/AllMovies';
import CastDetails from '../components/CastDetails';
import VideoPlayer from './../components/VideoPlayer';

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
        title: navigation.state.params.movie.original_title,
        ...StackNavHeaderStyles,
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
