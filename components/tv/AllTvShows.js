import React, { Component } from 'react';
import {Dimensions} from 'react-native';
import { FlatImageList } from '../common/ImageList';
import { connect } from 'react-redux';
import { selectedTvShow } from '../../Actions';
import { NavigationActions } from 'react-navigation';

import style from '../../styles/styles';

// return device width and height
const {height, width} = Dimensions.get('window');
const numColumns = parseInt(width / (92 + (5 * 2))); 

class AllTvShows extends Component {
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
  ...state.tvShows,
});

const mapDispatchToProps = dispatch => ({
  onShowDetails: (tvShow) => {
    dispatch(selectedTvShow(tvShow));
    dispatch(NavigationActions.navigate({routeName: 'TvShowDetails'}));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(AllTvShows);
