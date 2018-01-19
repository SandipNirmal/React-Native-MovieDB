import React, {Component} from 'react';
import Shows from './Shows';

import style from '../styles/styles';

class TvShows extends Shows {
  constructor(props) {
    super(props);
    this.state['categories'] = {
      'showingToday': [],
      'topRated': [],
      'popular': [],
    }
    this.carouselCategory = "showingToday";
  }

  /**
   * @overrides
   */
  componentDidMount() {
    // calls base class functions
    this.fetch('showingToday', '/tv/airing_today');
    this.fetch('topRated', '/tv/top_rated');
    this.fetch('popular', '/tv/popular');
  }

  /**
   * @overrides
   */
  showDetails(show) {
    this.props.navigation.navigate('TvShowDetails', {tvShow: show});
  }

  /**
   * @overrides
   */
  showAll(category, shows) {
    this.props.navigation.navigate('AllTvShows', 
      {category: category, tvShows: shows});
  }
}

export default TvShows;

