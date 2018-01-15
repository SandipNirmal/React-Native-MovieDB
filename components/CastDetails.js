import React, {Component} from 'react';
import {
  View,
  Text,
  Image,
  ActivityIndicator,
  ScrollView
} from 'react-native';

import HorizontalImageList from './ImageList';
import Constant from './../utilities/constants';
import {Configuration} from '../data/configuration';
import style, {StackNavHeaderStyles} from '../styles/styles';

export default class CastDetails extends Component {
  //TODO: the back button should ideally show MovieDetails but it isn't
  // doing that even after explicitly setting headerBackTitle: "MovieDetails" 
  // in MovieDetails figure out why

  static navigationOptions = ({
    navigation
  }) => ({
    title: navigation.state.params.cast.name,
    ...StackNavHeaderStyles,
  });

  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
      isMoviesLoaded: false,
      castData: []
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
        console.log(response);
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
      console.log('Movies', response);
      this.setState({
        moviesForCast: response,
        isMoviesLoaded: true
      });
    }).catch((error) => {
      console.error(error);
    });

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
          </View>
      </ScrollView>

      {/* {this.state.moviesForCast.cast.map((movie, index) => (
      <HorizontalImageList
            isTouchableImage
            hasSeeAllOption
            key={index}
            title={movie.title}
            style={style.posterSize}
            onPress={this.showMovieDetails.bind(this)}
            images={movie.movies}
          />))} */
      }
      </View>
    )
  }
}
