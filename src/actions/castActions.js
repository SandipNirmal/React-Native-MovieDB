import { getCastDetails } from './../services/person'

// CAST
export const MOVIES_CAST_SELECTED = 'MOVIES_CAST_SELECTED'
export const TVSHOWS_CAST_SELECTED = 'TVSHOWS_CAST_SELECTED'
export const SEARCH_CAST_SELECTED = 'SEARCH_CAST_SELECTED'
export const castSelected = (cast, screen) => ({
  type: `${screen.toUpperCase()}_CAST_SELECTED`,
  cast
})

export const FETCHING_MOVIES_CAST_DETAILS = 'FETCHING_MOVIES_CAST_DETAILS'
export const FETCHING_TVSHOWS_CAST_DETAILS = 'FETCHING_TVSHOWS_CAST_DETAILS'
export const FETCHING_SEARCH_CAST_DETAILS = 'FETCHING_SEARCH_CAST_DETAILS'
export const fetchingCastDetails = screen => ({
  type: `FETCHING_${screen.toUpperCase()}_CAST_DETAILS`
})

export const MOVIES_CAST_DETAILS_FETCHED = 'MOVIES_CAST_DETAILS_FETCHED'
export const TVSHOWS_CAST_DETAILS_FETCHED = 'TVSHOWS_CAST_DETAILS_FETCHED'
export const SEARCH_CAST_DETAILS_FETCHED = 'SEARCH_CAST_DETAILS_FETCHED'
export const castDetailsFetched = (details, category, screen) => ({
  type: `${screen.toUpperCase()}_CAST_DETAILS_FETCHED`,
  details,
  category
})

export const FETCH_CAST_DETAILS = 'FETCH_CAST_DETAILS'

export function fetchCastDetails(castId) {
  const request = getCastDetails(castId)

  return { type: FETCH_CAST_DETAILS, payload: request }
}
