import React, {Component} from 'react';
import Shows from './Shows';

import style, { StackNavHeaderStyles } from '../styles/styles';

class Movies extends Shows {
  static navigationOptions = {
    title: 'Movies',
    ...StackNavHeaderStyles,
  };

  constructor(props) {
    super(props);
		// TODO : nowShowing should pick up the movies from previous screen
		// the props are somehow not getting passed down to children.
    this.state['categories'] = {
      'nowShowing': [],
      'comingSoon': [],
      'popular': [],
    }
    this.carouselCategory = "nowShowing";
  }

  /**
   * @overrides
   */
  componentDidMount() {
    // calls base class functions
    this.fetch('nowShowing', '/movie/now_playing');
    this.fetch('comingSoon', '/movie/upcoming');
    this.fetch('popular', '/movie/popular');
  }

  /**
   * @overrides
   */
  showDetails(movie) {
    dispatch()
    this.props.navigation.navigate('MovieDetails', {movie: movie});
  }

  /**
   * @overrides
   */
  showAll(category, movies) {
    this.props.navigation.navigate('AllMovies', 
      {category: category, movies:movies});
  }
}

export default Movies;
