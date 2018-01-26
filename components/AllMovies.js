import React, { Component } from 'react';
import {Dimensions} from 'react-native';
import { StackNavigator } from 'react-navigation';
import { FlatImageList } from './common/ImageList';

import style from '../styles/styles';

// return device width and height
const {height, width} = Dimensions.get('window');
const numColumns = parseInt(width / (92 + (5 * 2))); 

class AllMovies extends Component {

  showMovieDetails(movie) {
    this.props.navigation.navigate('MovieDetails', {item: movie});
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
