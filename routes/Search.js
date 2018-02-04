import React from 'react';
import { StackNavigator } from 'react-navigation';

import Search from './../components/search/Search';
import TvShowDetails from './../components/tv/TvShowDetails';
import MovieDetails from './../components/movies/MovieDetails';
import CastDetails from './../components/common/CastDetails';
import ShareButton from './../components/common/shareButton';

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
      headerRight: <ShareButton 
                      name={navigation.state.params.item.original_title}
                      type="movie"
                      id={navigation.state.params.item.id}
                    />
    }),
  },
  TvShowDetails: {
    screen: TvShowDetails,
    navigationOptions: ({
      navigation
    }) => ({
      title: navigation.state.params.item.original_title,
      ...StackNavHeaderStyles,
      headerRight: <ShareButton 
                      name={navigation.state.params.item.name}
                      type="tv"
                      id={navigation.state.params.item.id}
                    />
    }),
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
