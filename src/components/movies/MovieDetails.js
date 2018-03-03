import React, {Component} from 'react'
import Details from '../base/Details'
import Constant from '../../utilities/constants'
import CastList from '../common/CastList'
import { connect } from 'react-redux'
import {
  castSelected,
  searchItemDetailsFetched,
  movieDetailsFetched
} from '../../Actions'
import { NavigationActions } from 'react-navigation'

class MovieDetails extends Details {
  componentDidMount () {
    const baseUrl = Constant.api_base_url
    const apiKey = Constant.api_key
    const movie_url = '/movie/'
    const appendResponse = 'append_to_response=videos,images'
    const movieId = this.props.details.id

    const movieUrl = `${baseUrl}${movie_url}${movieId}?${apiKey}&${appendResponse}`
    const movieCreditsUrl = `${baseUrl}${movie_url}${movieId}/credits?${apiKey}`

    this.fetchDetails(movieUrl, movieCreditsUrl)
  }

  getSpecialComponent () {
    return <CastList
      title='Director'
      items={this.props.details.directors || []}
      onPress={this.showCastDetails.bind(this)}
    />
  }
}

const mapStateToProps = ({tabNavHelper, search, movies, configuration}) => ({
  details: tabNavHelper.currentTab === 'Search' ? search.details : movies.details,
  currentTab: tabNavHelper.currentTab,
  config: configuration
})

const mapDispatchToProps = dispatch => ({
  onDetailsFetched: (details, category, currentTab) => {
    if (currentTab === 'Search') {
      dispatch(searchItemDetailsFetched(details, category))
    } else {
      dispatch(movieDetailsFetched(details, category))
    }
  },
  onCastSelected: (cast, currentTab) => {
    dispatch(castSelected(cast, currentTab))
    dispatch(NavigationActions.navigate({routeName: 'CastDetails',
      params: {
        name: cast.name,
        id: cast.id
      }}))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(MovieDetails)
