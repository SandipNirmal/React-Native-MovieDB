import React, { Component } from 'react';
import {Dimensions} from 'react-native';
import { StackNavigator } from 'react-navigation';
import { FlatImageList } from './ImageList';

import style, { StackNavHeaderStyles } from '../styles/styles';

// return device width and height
const {height, width} = Dimensions.get('window');
const numColumns = parseInt(width / (92 + (5 * 2))); 

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
        numColumns={numColumns}
        style={style.screenBackgroundColor}
        images={movies}
        onPress={this.showMovieDetails.bind(this)}
      />
    )
  }
}

export default AllMovies;
