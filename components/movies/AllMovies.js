import React, { Component } from 'react';
import {Dimensions} from 'react-native';
import { StackNavigator } from 'react-navigation';
import { FlatImageList } from '../common/ImageList';
import { connect } from 'react-redux';
import { selectedMovie } from '../../Actions';
import { NavigationActions } from 'react-navigation';

import style from '../../styles/styles';

// return device width and height
const {height, width} = Dimensions.get('window');
const numColumns = parseInt(width / (92 + (5 * 2))); 

// TODO: find a common place for this
String.prototype.toCategory = function() {
  return this.replace(/ /g, "").replace(/(.)/, c => c.toLowerCase());
};

class AllMovies extends Component {
  render() {
    const { onShowDetails, categories } = this.props;
    const { category } = this.props.navigation.state.params;

    return(
      <FlatImageList
        numColumns={numColumns}
        style={style.screenBackgroundColor}
        images={categories[category.toCategory()]}
        onPress={onShowDetails.bind(this)}
      />
    )
  }
}

const mapStateToProps = state => ({
  ...state.movies,
});

const mapDispatchToProps = dispatch => ({
  onShowDetails: (movie) => {
    dispatch(selectedMovie(movie));
    dispatch(NavigationActions.navigate({routeName: 'MovieDetails', params: {
      name: movie.name,
      id: movie.id
    }}));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(AllMovies);
