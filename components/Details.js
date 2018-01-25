import React, {Component} from 'react';
import { 
  ActivityIndicator,
  Button,
  ScrollView, StyleSheet,
  Text,
  View,
} from 'react-native';

import BackgroundImage from './BackgroundImage';
import MovieInfo from './MovieInfo';
import HorizontalImageList from './common/ImageList';
import CastList from './CastList'
import TrailerList from './TrailerList';
import CastDetails from './CastDetails';

import {Configuration} from '../data/configuration';
import Constant from '../utilities/constants';
import { getUriPopulatedTemp } from '../utilities/utils';
import style from '../styles/styles';

class Details extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      data: this.props.navigation.state.params.item,
      directors: [],
      casts: [],
    };
  }

  componentDidMount() {
    console.error("Override!!")
  }

  fetchDetails(uri) {
    fetch(uri).then((response) => response.json()).then((response) => {
      response.images = getUriPopulatedTemp(response.images.backdrops, 'backdrop');
      response.videos = this.formVideoUrls(response.videos.results) 
      this.setState({isLoading: false, data: response});
    }).catch((error) => { console.error(error); });
  }

  fetchPeople(uri) {
    fetch(uri).then((response) => response.json()).then((response) => {
      this.setState({
        directors: getUriPopulatedTemp(response.crew.filter((member) => 
          member.job === 'Director'), 'profile')
      });
      this.setState({
        casts: getUriPopulatedTemp(response.cast.sort((a, b) => a.order - b.order), 'profile')
      });
    }).catch((error) => { console.error(error); });
  }

  /**
   * Forms video urls
   */
  formVideoUrls(videos) {
    const filteredVideos = videos.filter((video) => video.site === 'YouTube');
    return filteredVideos.map((video) => {
      return {
        name: video.name,
        url: `https://www.youtube.com/embed/${video.key}`
      };
    });
  }

  showCastDetails(cast) {
    this.props.navigation.navigate('CastDetails', {cast: cast});
  }

  playVideo(url) {
    this.props.navigation.navigate('VideoPlayer', {url});
  }

  render() {
    const baseUrl = Configuration['images']['secure_base_url'];
    const size = Configuration['images']['poster_sizes'][5]
    const bgImage = `${baseUrl}${size}/${this.props.navigation.state.params.item.poster_path}`;
    const {images, videos} = this.state.data;

    return (
      <View style={[{ flex: 1 }, style.screenBackgroundColor]}>
        <BackgroundImage uri={bgImage}/>
        <ScrollView>
          <View style={style.detailsContainer}>
            <Text style={[style.text, style.titleText]}>
                {this.state.data.title}
            </Text>

            <MovieInfo
                releaseDate={this.state.data.release_date}
                runtime={this.state.data.runtime || 100}
                  ratings={this.state.data.vote_average}
              />

            <Text style={[style.text, style.normalText]}>
                {this.state.data.overview}
            </Text>

            <HorizontalImageList
              title="Photos"
              images={images || []}
              style={style.backdropSize}
            />

            <TrailerList 
                videos={videos || []} 
                playVideo={this.playVideo.bind(this)}
            />

            <CastList 
              title="Director"
              items={this.state.directors}
              onPress={this.showCastDetails.bind(this)}
            />
            
            <CastList
              title="Cast"
              items={this.state.casts}
              onPress={this.showCastDetails.bind(this)}
            />
          </View>
        </ScrollView>
      </View>
    );
  }
}

export default Details;
