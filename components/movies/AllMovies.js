import React, { Component } from 'react';
import {Dimensions} from 'react-native';
import { StackNavigator } from 'react-navigation';
import { FlatImageList } from '../common/ImageList';
import { connect } from 'react-redux';

import style from '../../styles/styles';

// return device width and height
const {height, width} = Dimensions.get('window');
const numColumns = parseInt(width / (92 + (5 * 2))); 

// TODO: find a common place for this
String.prototype.toCategory = function() {
  return this.replace(/ /g, "").replace(/(.)/, c => c.toLowerCase());
};

class AllMovies extends Component {

  showMovieDetails(movie) {
    this.props.navigation.navigate('MovieDetails', {item: movie});
  }

  render() {
    const { category } = this.props.navigation.state.params;
    const { categories } = this.props;
    return(
      <FlatImageList
        numColumns={numColumns}
        style={style.screenBackgroundColor}
        images={categories[category.toCategory()]}
        onPress={this.showMovieDetails.bind(this)}
      />
    )
  }
}

const mapStateToProps = state => ({
  ...state.movies,
});

const mapDispatchToProps = dispatch => ({ });

export default connect(mapStateToProps, mapDispatchToProps)(AllMovies);
