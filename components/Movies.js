import React, {Component} from 'react';
import {StackNavigator} from 'react-navigation';
import {Text, ScrollView, View} from 'react-native';
import MovieDetailsStack from './MovieDetails';
import AllMovies from './AllMovies';
import MovieList from './MovieList';
import Carousel from './Carousel';

// TODO: Implement Configuration and LatestMovies
import {Configuration} from '../data/configuration';
import {LatestMovies} from '../data/latest_movies';

class Movies extends Component {
  static navigationOptions = {
    title: 'Movies'
  };

  showMovieDetails(movie) {
    this.props.navigation.navigate('MovieDetailsStack', {movie: movie});
  }

  showAllMovies(category) {
    this.props.navigation.navigate('AllMovies', {category: category});
  }

  getMoviesList() {
    const baseUrl = Configuration['images']['secure_base_url'];
    const posterSize = Configuration['images']['poster_sizes'][0];
    let movies = [];
    LatestMovies.results.forEach(function(movie) {
        movie['uri'] = baseUrl + '/' + posterSize + '/' + movie['poster_path'];
        movies.push(movie);
      });
    return movies;
  }

  getComingSoonMovieList() {
    const baseUrl = Configuration['images']['secure_base_url'];
    const logoSize = Configuration['images']['backdrop_sizes'][0];
    let movies = [];
    LatestMovies.results.forEach(function(movie) {
        movie['uri'] = baseUrl + '/' + logoSize + '/' + movie['backdrop_path'];
        movies.push(movie);
      });
    return movies;
  }

  render() {
    const {navigate} = this.props.navigation;
    const movies = this.getMoviesList();
    // TODO: should get movies list as props?
    const categories = [
      {
        "title": "Now Showing",
        "movies": movies
      }, {
        "title": "Coming Soon",
        "movies": movies
      }, {
        "title": "Popular",
        "movies": movies
      }
    ];

    return (
      <ScrollView>
        <Carousel 
          movies={this.getComingSoonMovieList()} 
          onPress={this.showMovieDetails.bind(this)}
        />
        {categories.map((category, index) => (<MovieList
          key={index}
          title={category.title}
          onShowAll={this.showAllMovies.bind(this)}
          onPress={this.showMovieDetails.bind(this)}
          movies={category.movies}/>))}
      </ScrollView>
    );
  }
}

const MoviesStack = StackNavigator({
    Movie: {
      screen: Movies
    },
    MovieDetailsStack: {
      screen: MovieDetailsStack
    },
    AllMovies: {
      screen: AllMovies
    },
  },
  {
    headerMode: 'float',
    cardStyle: {
      backgroundColor: '#4a4a4a'
    }
  });

export default MoviesStack;
