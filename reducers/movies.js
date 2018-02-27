import initialState from '../State'
import * as A from '../Actions'
import { populateDetails, populateCastDetails } from './common'

function movies (state = initialState['movies'], action) {
  let newState = JSON.parse(JSON.stringify(state))
  switch (action.type) {
    case A.LANGUAGE_CHANGED: break
    case A.REGION_CHANGED: break
    case A.FETCHING_MOVIES:
      newState.isFetching = true
      return newState
    case A.NOW_SHOWING_MOVIES_FETCHED:
      newState.isFetching = false
      newState.categories['nowShowing'] = action.movies
      return newState
    case A.COMING_SOON_MOVIES_FETCHED:
      newState.categories['comingSoon'] = action.movies
      return newState
    case A.POPULAR_MOVIES_FETCHED:
      newState.categories['popular'] = action.movies
      return newState
    case A.MOVIE_SELECTED:
      // We can choose to cache the movies. is that necessary?
      // Clear the earlier data
      newState.details = {}
      newState.details = Object.assign({}, newState.details, action.movie)
      return newState
    case A.MOVIE_DETAILS_FETCHED:
      return populateDetails(newState, action)
    case A.MOVIES_CAST_SELECTED:
      // Clear the earlier data
      newState.cast.details = {}
      newState.cast.details = Object.assign({}, newState.cast.details, action.cast)
      return newState
    case A.FETCHING_MOVIES_CAST_DETAILS:
      newState.cast.isFetching = true
      return newState
    case A.MOVIES_CAST_DETAILS_FETCHED:
      newState.cast.isFetching = false
      return populateCastDetails(newState, action)
    default: return state
  }
}

export default movies
