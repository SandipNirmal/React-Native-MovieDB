import initialState from '../State'
import * as A from '../Actions'
import { populateDetails, populateCastDetails } from './common'

const search = (state = initialState['search'], action) => {
  // TODO : optimise
  let newState = JSON.parse(JSON.stringify(state))
  switch (action.type) {
    case A.SEARCHING_MOVIES_ETC:
      newState.isSearching = true
      return newState
    case A.DONE_SEARCHING_MOVIES_ETC:
      newState.isSearching = false
      newState.results = action.results
      return newState
    case A.SEARCH_FILTER_CHANGED:
      newState.selectedIndex = action.index
      return newState
    case A.FETCHING_SEARCH_CAST_DETAILS:
      newState.cast.isFetching = true
      return newState
    case A.SEARCH_CAST_SELECTED:
      // Clear the earlier data
      newState.cast.details = {}
      newState.cast.details = Object.assign({}, newState.cast.details, action.cast)
      return newState
    case A.SEARCH_RESULT_SELECTED:
      // We can choose to cache the movies. is that necessary think?
      if (action.mediaType === 'person') {
        // Clear the earlier data
        newState.cast.details = {}
        newState.cast.details = Object.assign({}, newState.cast.details, action.result)
      } else {
        // Clear the earlier data
        newState.details = {}
        newState.details = Object.assign({}, newState.details, action.result)
      }
      return newState
    case A.SEARCH_CAST_DETAILS_FETCHED:
    case A.SEARCH_ITEM_DETAILS_FETCHED:
      if (action.isFetching !== undefined) { newState.cast.isFetching = false }
      newState = populateDetails(newState, action)
      return populateCastDetails(newState, action)
    default:
      return state
  }
}

export default search
