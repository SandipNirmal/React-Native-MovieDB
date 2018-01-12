import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';
import { FlatImageList } from './ImageList';

import style, { StackNavHeaderStyles } from '../styles/styles';

class AllMovies extends Component {
  static navigationOptions = ({navigation}) => ({
    title: navigation.state.params.category,
    ...StackNavHeaderStyles,
  });

  showMovieDetails(movie) {
    this.props.navigation.navigate('MovieDetails', {movie: movie});
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

export default AllMovies;
