import React, {Component} from 'react'
import {NavigationActions} from 'react-navigation'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {View, Text, Image, ActivityIndicator, ScrollView} from 'react-native'

import HorizontalImageList from './ImageList'
import Constant from '../../utilities/constants'
import {getUriPopulated} from '../../utilities/utils'
import {castDetailsFetched, fetchingCastDetails, selectedMovie, searchItemDetailsFetched, fetchCastDetails} from '../../Actions'

import style, {primaryColor, StackNavHeaderStyles} from '../../styles/styles'

class CastDetails extends Component {
  componentDidMount () {
    this.props.fetchCastDetails(this.props.details.id)

    const baseUrl = Constant.api_base_url
    const apiKey = Constant.api_key
    const castDetailUrl = `/person/${this.props.details.id}`
    const castKnownForUrl = `${castDetailUrl}/movie_credits`
    const {
      config,
      currentTab,
      config: {
        image: {
          secureBaseUrl,
          posterSizeForBackground
        }
      }
    } = this.props

    if (currentTab !== 'Search') // search tab already has the data available
    { this.props.onFetching(currentTab) }

    // fetch Cast Details
    fetch(`${baseUrl}${castDetailUrl}?${apiKey}`)
      .then((response) => response.json())
      .then((response) => {
        response.imageSrc = `${secureBaseUrl}${posterSizeForBackground}${response['profile_path']}`
        this.props.onDetailsFetched(response, 'bio', this.props.currentTab)
      }).catch((error) => {
        console.error(error)
      })

    // fetch Casts other movies
    fetch(`${baseUrl}${castKnownForUrl}?${apiKey}`)
      .then((response) => response.json())
      .then((response) => {
        const movieList = [
          ...response.cast,
          ...response.crew
        ]
        this.props.onDetailsFetched(getUriPopulated(movieList, config, 'posterSizeForImageList'),
          'movies',
          this.props.currentTab)
      }).catch((error) => {
        console.error(error)
      })
  }

  render () {
    const {onShowDetails, isFetching, details, config} = this.props

    if (isFetching) {
      return (
        <ScrollView style={style.screenBackgroundColor}>
          <ActivityIndicator size='large' color={primaryColor} />
        </ScrollView>
      )
    }

    return (
      <View
        style={[{flex: 1}, style.screenBackgroundColor]}>
        <ScrollView style={style.screenBackgroundColor}>
          <View style={style.castBackground}>
            <Image
              style={[style.avatarSize, style.avatarBigSize]}
              source={{
                uri: details.imageSrc
              }} />
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
              style={config.style.posterSize}
              onPress={onShowDetails.bind(this)}
              images={details.movies || []} />
          </View>
        </ScrollView>
      </View>
    )
  }
}

const mapStateToProps = state => {
  const currentTab = state.tabNavHelper.currentTab
  const mapScreenToStateProps = {
    'Movies': 'movies',
    'TvShows': 'tvShows',
    'Search': 'search'
  }

  return {
    config: state.configuration,
    currentTab,
    ...state[mapScreenToStateProps[currentTab]].cast,
    cast: state.cast
  }
}

const mapDispatchToProps = dispatch => ({
  onFetching: (currentTab) => {
    dispatch(fetchingCastDetails(currentTab))
  },
  onDetailsFetched: (details, category, currentTab) => {
    if (currentTab === 'Search') {
      dispatch(searchItemDetailsFetched(details, category))
    } else {
      dispatch(castDetailsFetched(details, category, currentTab))
    }
  },
  onShowDetails: (movie) => {
    dispatch(selectedMovie(movie))
    dispatch(NavigationActions.navigate({
      routeName: 'MovieDetails',
      params: {
        name: movie.name || movie.original_title,
        id: movie.id
      }
    }))
  },
  fetchCastDetails
})

export default connect(mapStateToProps, mapDispatchToProps)(CastDetails)
