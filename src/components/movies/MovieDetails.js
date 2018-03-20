import React, {Component} from 'react'
import Details from '../base/Details'
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
    this.fetchDetails('/movie/', this.props.details.id)
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
