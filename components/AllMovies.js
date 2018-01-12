import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';
import { FlatImageList } from './ImageList';
import MovieDetailsStack from './MovieDetails';

import style from '../styles/styles';

class AllMovies extends Component {
  static navigationOptions = ({navigation}) => ({
    title: navigation.state.params.category,
    headerTitleStyle: style.headerTextColor,
    headerStyle: style.headerBackground,
    headerTintColor: style.headerTintColor,
  });

  showMovieDetails(movie) {
    this.props.navigation.navigate('MovieDetailsStack', {movie: movie});
  }

  render() {
    const movies = this.props.navigation.state.params.movies;
    return(
      <FlatImageList
        numColumns={4}
        style={style.screenBackgroundColor}
        images={movies}
        onPress={this.showMovieDetails.bind(this)}
      />
    )
  }
}

const AllMoviesStack = StackNavigator({
    AllMoviesStack: {
      screen: AllMovies
    },
    MovieDetailsStack: {
      screen: MovieDetailsStack
    }
  },
  {
    headerMode: 'none',
  }
)

export default AllMoviesStack;
