// TV SHOWS
export const FETCHING_TV_SHOWS = 'FETCHING_TV_SHOWS'
export const fetchingTvShows = () => ({ type: 'FETCHING_TV_SHOWS' })

export const SHOWING_TODAY_TV_SHOWS_FETCHED = 'SHOWING_TODAY_TV_SHOWS_FETCHED'
export const TOP_RATED_TV_SHOWS_FETCHED = 'TOP_RATED_TV_SHOWS_FETCHED'
export const POPULAR_TV_SHOWS_FETCHED = 'POPULAR_TV_SHOWS_FETCHED'

export const tvShowsFetched = (category, tvShows) => ({
  type: category.toUnderScore().toUpperCase() + '_TV_SHOWS_FETCHED',
  tvShows
})

export const TV_SHOW_SELECTED = 'TV_SHOW_SELECTED'
export const selectedTvShow = tvShow => ({ type: 'TV_SHOW_SELECTED', tvShow })

export const TV_SHOW_DETAILS_FETCHED = 'TV_SHOW_DETAILS_FETCHED'
export const tvShowDetailsFetched = (details, category) => ({
  type: 'TV_SHOW_DETAILS_FETCHED',
  details,
  category
})
