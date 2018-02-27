import initialState from '../State'
import * as A from '../Actions'
import { populateDetails, populateCastDetails } from './common'

function tvShows (state = initialState['tvShows'], action) {
  let newState = JSON.parse(JSON.stringify(state))
  switch (action.type) {
    case A.LANGUAGE_CHANGED: break
    case A.REGION_CHANGED: break
    case A.FETCHING_TV_SHOWS:
      newState.isFetching = true
      return newState
    case A.SHOWING_TODAY_TV_SHOWS_FETCHED:
      newState.isFetching = false
      newState.categories['showingToday'] = action.tvShows
      return newState
    case A.TOP_RATED_TV_SHOWS_FETCHED:
      newState.categories['topRated'] = action.tvShows
      return newState
    case A.POPULAR_TV_SHOWS_FETCHED:
      newState.categories['popular'] = action.tvShows
      return newState
    case A.TV_SHOW_SELECTED:
      // We can choose to cache the movies. is that necessary?
      // Clear the earlier data
      newState.details = {}
      newState.details = Object.assign({}, newState.details, action.tvShow)
      return newState
    case A.TV_SHOW_DETAILS_FETCHED:
      return populateDetails(newState, action)
    case A.TVSHOWS_CAST_SELECTED:
      // Clear the earlier data
      newState.cast.details = {}
      newState.cast.details = Object.assign({}, newState.cast.details, action.cast)
      return newState
    case A.FETCHING_TVSHOWS_CAST_DETAILS:
      newState.cast.isFetching = true
      return newState
    case A.TVSHOWS_CAST_DETAILS_FETCHED:
      newState.cast.isFetching = false
      return populateCastDetails(newState, action)
    default: return state
  }
}

export default tvShows
