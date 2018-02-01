import React, {Component} from 'react';
import { connect } from 'react-redux';
import Shows from '../base/Shows';
import { fetchingTvShows, tvShowsFetched } from '../../Actions';
import * as _ from 'lodash';

import style from '../../styles/styles';

class TvShows extends Shows {
  constructor(props) {
    super(props);
    this.carouselCategory = "showingToday";
  }

  /**
   * @overrides
   */
  componentDidMount() {
    // calls base class functions
    if(_.isEmpty(this.props.categories.showingToday)) {
      this.props.onFetching();
    }
    this.fetch('showingToday', '/tv/airing_today');
    this.fetch('topRated', '/tv/top_rated');
    this.fetch('popular', '/tv/popular');
  }

  /**
   * @overrides
   */
  showDetails(show) {
    this.props.navigation.navigate('TvShowDetails', {item: show});
  }

  /**
   * @overrides
   */
  showAll(category, shows) {
    this.props.navigation.navigate('AllTvShows', 
      {category: category, tvShows: shows});
  }
}

const mapStateToProps = state => ({
  ...state.tvShows,
  config: state.configuration,
  settings: state.settings,
});

const mapDispatchToProps = dispatch => ({
  onFetching: () => {
    dispatch(fetchingTvShows());
  },
  onFetchCompleted: (category, tvShows) => {
    dispatch(tvShowsFetched(category, tvShows));
  }, 
});

export default connect(mapStateToProps, mapDispatchToProps)(TvShows);
