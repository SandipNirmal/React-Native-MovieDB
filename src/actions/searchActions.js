// SEARCH
export const SEARCHING_MOVIES_ETC = 'SEARCHING_MOVIES_ETC'

export const searchingForMoviesEtc = () => ({ type: 'SEARCHING_MOVIES_ETC' })

export const DONE_SEARCHING_MOVIES_ETC = 'DONE_SEARCHING_MOVIES_ETC'
export const doneSearchingMoviesEtc = results => ({
  type: 'DONE_SEARCHING_MOVIES_ETC',
  results
})

export const SEARCH_FILTER_CHANGED = 'SEARCH_FILTER_CHANGED'
export const searchFilterChanged = index => ({
  type: 'SEARCH_FILTER_CHANGED',
  index
})

export const SEARCH_RESULT_SELECTED = 'SEARCH_RESULT_SELECTED'
export const searchResultSelected = (result, mediaType) => ({
  type: 'SEARCH_RESULT_SELECTED',
  result,
  mediaType
})

export const SEARCH_ITEM_DETAILS_FETCHED = 'SEARCH_ITEM_DETAILS_FETCHED'
export const searchItemDetailsFetched = (details, category) => ({
  type: 'SEARCH_ITEM_DETAILS_FETCHED',
  details,
  category
})
