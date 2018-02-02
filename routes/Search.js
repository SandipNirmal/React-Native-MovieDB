import {
  StackNavigator
} from 'react-navigation';

import Search from './../components/search/Search';
import TvShowDetails from './../components/tv/TvShowDetails';
import MovieDetails from './../components/movies/MovieDetails';
import CastDetails from './../components/common/CastDetails';

import { StackNavHeaderStyles } from '../styles/styles';

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
      navigation
    }) => ({
      title: navigation.state.params.item.original_title,
      ...StackNavHeaderStyles,
    }),
  },
  TvShowDetails: {
    screen: TvShowDetails,
    navigationOptions: ({
      navigation
    }) => ({
      title: navigation.state.params.item.original_title,
      ...StackNavHeaderStyles,
    }),
  },
  CastDetails: {
    screen: CastDetails,
    navigationOptions: ({
      navigation
    }) => ({
      title: navigation.state.params.cast.name,
      ...StackNavHeaderStyles,
    }),
  },
}, {
  headerMode: 'float',
  cardStyle: {
    backgroundColor: '#494949'
    // backgroundColor: 'rgba(4, 4, 4, 0.6)'  
  }
});

export default SearchStack;
