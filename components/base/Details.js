import React, {Component} from 'react';
import { 
  ActivityIndicator,
  Button,
  ScrollView, StyleSheet,
  Text,
  View,
  Linking,
  Platform
} from 'react-native';

import BackgroundImage from '../common/BackgroundImage';
import ShowOverview from '../common/ShowOverview';
import HorizontalImageList from '../common/ImageList';
import CastList from '../common/CastList'
import TrailerList from '../common/TrailerList';
import CastDetails from '../common/CastDetails';

import { Configuration } from '../../data/configuration';
import { getUriPopulatedTemp } from '../../utilities/utils';
import style, {marginTop} from '../../styles/styles';

class Details extends Component {
  constructor(props) {
    super(props);
    this.state = {
      opacity: 1,
      blur: 0
    };
  }

  componentDidMount() {
    console.error("Override!!");
  }

  getSpecialComponent() {
    console.error("Override!!");
  }

  fetchDetails(imagesUri, peopleUri) {
    const { onDetailsFetched, currentTab } = this.props;
    fetch(imagesUri).then((response) => response.json()).then((response) => {
      response.images = getUriPopulatedTemp(response.images.backdrops, 'backdrop');
      response.videos = this.formVideoUrls(response.videos.results) 
      onDetailsFetched(response, 'imagesAndVideos', currentTab);
    }).catch((error) => { console.error(error); });

    fetch(peopleUri).then((response) => response.json()).then((response) => {
      const people = {
        'directors': getUriPopulatedTemp(response.crew.filter((member) => 
          member.job === 'Director'), 'profile'),
        'casts': getUriPopulatedTemp(response.cast.sort((a, b) => a.order - b.order), 'profile')
      }
      onDetailsFetched(people, 'directorsAndCast', currentTab);
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
        url: `https://www.youtube.com/embed/${video.key}?&autoplay=1`
      };
    });
  }

  showCastDetails(cast) {
    this.props.navigation.navigate('CastDetails', {cast: cast});
  }

  playVideo(url) {
    if (Platform.OS === 'ios') {
      this
        .props
        .navigation
        .navigate('VideoPlayer', {url});
    } else if (Platform.OS === 'android') {
      Linking
        .openURL(url)
        .catch(err => console.error('An error occurred', err));
    }
  }

  handleOnScroll = (e) => {
    const yOffset = e.nativeEvent.contentOffset.y;
    const blurConstant = 10;
    // If Y scroll position is more than detail poster then blur it
    if (yOffset > marginTop) {
      this.setState({
        opacity: 0,
        blur: blurConstant
      })
    } else {
      const opacity = 1 - (yOffset/marginTop);
      const blur = parseInt((yOffset * blurConstant ) / marginTop, 10);
      this.setState({
        opacity,
        blur
      })
    }
  }

  render() {
    const baseUrl = Configuration['images']['secure_base_url'];
    const size = Configuration['images']['poster_sizes'][5]
    const bgImage = `${baseUrl}${size}/${this.props.details.poster_path}`;
    const {
      title, images, videos, release_date, casts, first_air_date, runtime,
      vote_average, overview
    } = this.props.details;

    return (
      <View style={[{ flex: 1 }, style.screenBackgroundColor]}>
        <BackgroundImage 
          uri={bgImage} 
          opacity={this.state.opacity}
          blur={this.state.blur}/>
        <ScrollView>

        { // TODO - Disabling onScroll blur. Need better solution
          /* onScroll={this.handleOnScroll} scrollEventThrottle={160} */}
          <View style={style.detailsContainer}>
            <Text style={[style.text, style.titleText]}>
                {title}
            </Text>

            <ShowOverview
                date={release_date || first_air_date}
                runtime={runtime || 100}
                ratings={vote_average}
              />

            <Text style={[style.text, style.normalText]}>
                {overview}
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

            {this.getSpecialComponent()} 

            <CastList
              title="Cast"
              items={casts || []}
              onPress={this.showCastDetails.bind(this)}
            />
          </View>
        </ScrollView>
      </View>
    );
  }
}

export default Details;
