import React, {Component} from 'react';
import {
  View,
  Text,
  Image,
  ActivityIndicator,
  ScrollView
} from 'react-native';
import { connect } from 'react-redux';

import HorizontalImageList from './ImageList';
import Constant from '../../utilities/constants';
import { getUriPopulatedTemp } from '../../utilities/utils';
import {Configuration} from '../../data/configuration';
import {
  castDetailsFetched,
  fetchingCastDetails,
  selectedMovie, searchItemDetailsFetched,
} from '../../Actions';
import { NavigationActions } from 'react-navigation';
import style, {StackNavHeaderStyles} from '../../styles/styles';

class CastDetails extends Component {
  componentDidMount() {
    const baseUrl = Constant.api_base_url;
    const apiKey = Constant.api_key;
    const castDetailUrl = `/person/${this.props.details.id}`;
    const castKnownForUrl = `${castDetailUrl}/movie_credits`;
    const baseImageUrl = Configuration['images']['secure_base_url'];
    const posterSize = Configuration['images']['profile_sizes'][1];

    // fetch Cast Details
    this.props.onFetching(this.props.currentTab);
    fetch(`${baseUrl}${castDetailUrl}?${apiKey}`)
      .then((response) => response.json())
      .then((response) => {
        response.imageSrc = `${baseImageUrl}${posterSize}${response['profile_path']}`;
        this.props.onDetailsFetched(response, 'bio', this.props.currentTab);
      }).catch((error) => {
        console.error(error);
      });

    // fetch Casts other movies
    fetch(`${baseUrl}${castKnownForUrl}?${apiKey}`)
    .then((response) => response.json())
    .then((response) => {
      const movieList = [...response.cast, ...response.crew];
      this.props.onDetailsFetched(getUriPopulatedTemp(movieList),
                                  'movies', this.props.currentTab);
    }).catch((error) => {
      console.error(error);
    });
  }

  render() {
    const { onShowDetails, isFetching, details } = this.props;

    if (isFetching) {
      return (
        <View style={[{ flex: 1 }, style.screenBackgroundColor]}>
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
                    source={{uri: details.imageSrc}}/>
              <Text style={[style.text, style.titleText]}>
                {details.name}
              </Text>
              <Text style={[style.text, style.normalText]}>
                {details.birthday}
              </Text>
              <Text style={[style.text, style.normalText]}>
                {details.place_of_birth}
              </Text>
            </View>

            <View style={[style.castBiography]}>
              <Text style={[style.text, style.normalText]}>
                {details.biography}
              </Text>

              <HorizontalImageList
                isTouchableImage
                title='Known For'
                style={style.posterSize}
                onPress={onShowDetails.bind(this)}
                images={details.movies || []}
              />
            </View>
        </ScrollView>
      </View>
    )
  }
}

const mapStateToProps = state => {
  const currentTab = state.tabNavHelper.currentTab;
  console.log(currentTab);

  if (currentTab === 'Movies') {
    return {
      currentTab,
      ...state.movies.cast
    }
  } else if (currentTab === 'TvShows') {
    return {
      currentTab,
      ...state.tvShows.cast
    }
  } else if (currentTab === 'Search') {
    console.log("search : " , state.search)
    return {
      currentTab,
      ...state.search.cast
    }
  } else {
    return {};
  }
}

const mapDispatchToProps = dispatch => ({
  onFetching: (currentTab) => {
    dispatch(fetchingCastDetails(currentTab));
  },
  onDetailsFetched: (details, category, currentTab) => {
    if (currentTab === 'Search') {
      dispatch(searchItemDetailsFetched(details, category))
    } else {
      dispatch(castDetailsFetched(details, category, currentTab))
    }
  },
  onShowDetails: (movie) => {
    dispatch(selectedMovie(movie));
    dispatch(NavigationActions.navigate({routeName: 'MovieDetails', params: {
      name: movie.name || movie.original_title,
      id: movie.id
    }}));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(CastDetails);
