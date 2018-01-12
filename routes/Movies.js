import {StackNavigator} from 'react-navigation';
import Movies from '../components/Movies';
import MovieDetails from '../components/MovieDetails';
import AllMovies from '../components/AllMovies';
import CastDetails from '../components/CastDetails';

const MoviesStack = StackNavigator({
    Movie: {
      screen: Movies
    },
    MovieDetails: {
      screen: MovieDetails
    },
    AllMovies: {
      screen: AllMovies
    },
    CastDetails: {
      screen: CastDetails
    },
  },
  {
    headerMode: 'float',
    cardStyle: {
      backgroundColor: '#4C4C4C'
    }
  }
);

export default MoviesStack;
