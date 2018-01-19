import React, { Component } from 'react';
import {Dimensions} from 'react-native';
import { FlatImageList } from './common/ImageList';

import style from '../styles/styles';

// return device width and height
const {height, width} = Dimensions.get('window');
const numColumns = parseInt(width / (92 + (5 * 2))); 

class AllTvShows extends Component {
  showDetails(show) {
    this.props.navigation.navigate('TvShowDetails', {tvShow: show});
  }

  render() {
    const { tvShows } = this.props.navigation.state.params;
    return(
      <FlatImageList
        numColumns={numColumns}
        style={style.screenBackgroundColor}
        images={tvShows}
        onPress={this.showDetails.bind(this)}
      />
    )
  }
}

export default AllTvShows;

