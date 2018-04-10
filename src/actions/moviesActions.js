// MOVIES
export const FETCHING_MOVIES = 'FETCHING_MOVIES'
export const fetchingMovies = () => ({ type: 'FETCHING_MOVIES' })

export const NOW_SHOWING_MOVIES_FETCHED = 'NOW_SHOWING_MOVIES_FETCHED'
export const COMING_SOON_MOVIES_FETCHED = 'COMING_SOON_MOVIES_FETCHED'
export const POPULAR_MOVIES_FETCHED = 'POPULAR_MOVIES_FETCHED'

export const movieFetched = (category, movies) => ({
  type: category.toUnderScore().toUpperCase() + '_MOVIES_FETCHED',
  movies
})

export const MOVIE_SELECTED = 'MOVIE_SELECTED'
export const selectedMovie = movie => ({ type: 'MOVIE_SELECTED', movie })

export const MOVIE_DETAILS_FETCHED = 'MOVIE_DETAILS_FETCHED'
export const movieDetailsFetched = (details, category) => ({
  type: 'MOVIE_DETAILS_FETCHED',
  details,
  category
})
