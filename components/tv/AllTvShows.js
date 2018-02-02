import React, { Component } from 'react';
import {Dimensions} from 'react-native';
import { FlatImageList } from '../common/ImageList';
import { connect } from 'react-redux';

import style from '../../styles/styles';

// return device width and height
const {height, width} = Dimensions.get('window');
const numColumns = parseInt(width / (92 + (5 * 2))); 

class AllTvShows extends Component {
  showDetails(show) {
    this.props.navigation.navigate('TvShowDetails', {item: show});
  }

  render() {
    const { category } = this.props.navigation.state.params;
    const { categories } = this.props;
    return(
      <FlatImageList
        numColumns={numColumns}
        style={style.screenBackgroundColor}
        images={categories[category.toCategory()]}
        onPress={this.showDetails.bind(this)}
      />
    )
  }
}

const mapStateToProps = state => ({
  ...state.tvShows,
});

const mapDispatchToProps = dispatch => ({ });

export default connect(mapStateToProps, mapDispatchToProps)(AllTvShows);
