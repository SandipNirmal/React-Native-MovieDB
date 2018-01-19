import React, {Component} from 'react';
import {
  View,
  Text,
  Image,
  ActivityIndicator,
  ScrollView
} from 'react-native';

import HorizontalImageList from './common/ImageList';
import Constant from './../utilities/constants';
import {Configuration} from '../data/configuration';
import style, {StackNavHeaderStyles} from '../styles/styles';

export default class CastDetails extends Component {
  static navigationOptions = ({navigation}) => ({
    title: navigation.state.params.cast.name,
    ...StackNavHeaderStyles,
  });

  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
      isMoviesLoaded: false,
      castData: [],
      movieList: []
    };
  }

  componentDidMount() {
    const baseUrl = Constant.api_base_url;
    const apiKey = Constant.api_key;
    const castDetailUrl = `/person/${this.props.navigation.state.params.cast.id}`;
    const castKnownForUrl = `${castDetailUrl}/movie_credits`;
    const baseImageUrl = Configuration['images']['secure_base_url'];
    const posterSize = Configuration['images']['profile_sizes'][1];

    // fetch Cast Details
    fetch(`${baseUrl}${castDetailUrl}?${apiKey}`)
      .then((response) => response.json())
      .then((response) => {
        response.imageSrc = `${baseImageUrl}${posterSize}${response['profile_path']}`;
        this.setState({
          isLoading: false,
          castData: response
        });

      }).catch((error) => {
        console.error(error);
      });

    // fetch Casts other movies
    fetch(`${baseUrl}${castKnownForUrl}?${apiKey}`)
    .then((response) => response.json())
    .then((response) => {
      this.setState({
        movieList: this.formImageUrls(response),
        isMoviesLoaded: true
      });
    }).catch((error) => {
      console.error(error);
    });
  }

  showMovieDetails(movie) {
    this.props.navigation.navigate('MovieDetails', {movie: movie});
  }

  /**
   * Forms image urls for movies
   */
  formImageUrls(res) {
    const baseUrl = Configuration['images']['secure_base_url'];
    const posterSize = Configuration['images']['poster_sizes'][0];
    const movieList = [...res.cast, ...res.crew];
    
    const movies = movieList.map((movie) => {
        movie['uri'] = baseUrl + '/' + posterSize + '/' + movie['poster_path'];
        return movie;
      });
    return movies;
  }
  

  render() {
    if (this.state.isLoading) {
      return (
        <View style={[{
          flex: 1
      }, style.screenBackgroundColor]}>
          <ActivityIndicator />
        </View>
      )
    }
    
    return (
      <View style={[{
        flex: 1
    }, style.screenBackgroundColor]}>
        <ScrollView style={style.screenBackgroundColor}>
            <View style={style.castBackground}>
              <Image style={[style.avatarSize, style.avatarBigSize]}
                    source={{uri: this.state.castData.imageSrc}}/>
              <Text style={[style.text, style.titleText]}>
                {this.state.castData.name}
              </Text>
              <Text style={[style.text, style.normalText]}>
                {this.state.castData.birthday}
              </Text>
              <Text style={[style.text, style.normalText]}>
                {this.state.castData.place_of_birth}
              </Text>
            </View>

            <View style={[style.castBiography]}>
              <Text style={[style.text, style.normalText]}>
                {this.state.castData.biography}
              </Text>

              <HorizontalImageList
                isTouchableImage
                title='Known For'
                style={style.posterSize}
                onPress={this.showMovieDetails.bind(this)}
                images={this.state.movieList}
              />
            </View>
        </ScrollView>
      </View>
    )
  }
}
