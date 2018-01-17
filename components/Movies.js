import React, {Component} from 'react';
import {Text, ScrollView, View} from 'react-native';
import HorizontalImageList from './ImageList';
import Carousel from './Carousel';
import StartupScreen from './StartupScreen';
import Constant from './../utilities/constants';

import style, { StackNavHeaderStyles } from '../styles/styles';

// TODO: Implement Configuration and LatestMovies
import {Configuration} from '../data/configuration';
import {LatestMovies} from '../data/latest_movies';

String.prototype.toTitle = function() {
  return this.replace(/([A-Z])/g, " $1").replace(/(.)/, c => c.toUpperCase());
};

class Movies extends Component {
  static navigationOptions = {
    title: 'Movies',
    ...StackNavHeaderStyles,
  };

  constructor(props) {
    super(props);
    this.state = {
      "isLoading": true,
      "categories": {
        "nowShowing": [],
        "comingSoon": [],
        "popular": [],
      }
    }
  }

  componentDidMount() {
    this.fetchMovies('nowShowing', 'now_playing');
    this.fetchMovies('comingSoon', 'upcoming');
    this.fetchMovies('popular', 'popular');
  }

  fetchMovies(category, route) {
    const baseUrl = Constant.api_base_url + '/movie/';
    const apiKey = Constant.api_key;
    const language = "language=en-US";
    const uri = `${baseUrl}${route}?${apiKey}&${language}&page=1`;

    fetch(uri).then((response) => response.json()).then((response) => {
      let { categories } = this.state;
      categories[category] = this.getUriPopulated(response.results);
      this.setState({isLoading: false, categories: categories});
    }).catch(error => console.log(error))
  }

  getUriPopulated(movies, imageType="poster") {
    const secureUrl = Configuration['images']['secure_base_url'];
    const size = Configuration['images'][`${imageType}_sizes`][0];

    return movies.map((movie) => {
      const path = movie[`${imageType}_path`];
      movie['uri'] = `${secureUrl}${size}${path}`;
      return movie
    });
  }

  showMovieDetails(movie) {
    this.props.navigation.navigate('MovieDetails', {movie: movie});
  }

  showAllMovies(category, movies) {
    this.props.navigation.navigate('AllMovies', 
      {category: category, movies:movies});
  }

  render() {
    const { isLoading, categories } = this.state;

    return (
      isLoading ?
        <StartupScreen />
      :
        <ScrollView style={style.screenBackgroundColor}>
          <Carousel 
            movies={this.getUriPopulated(categories['nowShowing'], 'backdrop')} 
            onPress={this.showMovieDetails.bind(this)}
          />
          {Object.keys(categories).map((category, index) => (
            <HorizontalImageList
              isTouchableImage
              hasSeeAllOption
              key={index}
              title={category.toTitle()}
              style={style.posterSize}
              onShowAll={this.showAllMovies.bind(this)}
              onPress={this.showMovieDetails.bind(this)}
              images={this.state.categories[category]}
            />
          ))}
        </ScrollView>
    );
  }
}

export default Movies;
