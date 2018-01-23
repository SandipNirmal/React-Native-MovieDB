export const LANGUAGE_CHANGED = "LANGUAGE_CHANGED";
export const REGION_CHANGED = "REGION_CHANGED";

String.prototype.toUnderScore = function() {
  return this.replace(/([A-Z])/g, "_$1");
};

// MOVIES
export const FETCHING_MOVIES = "FETCHING_MOVIES";
export const fetchingMovies = () => ({
  type: "FETCHING_MOVIES"
});

export const NOW_SHOWING_MOVIES_FETCHED = "NOW_SHOWING_MOVIES_FETCHED";
export const COMING_SOON_MOVIES_FETCHED = "COMING_SOON_MOVIES_FETCHED";
export const POPULAR_MOVIES_FETCHED = "POPULAR_MOVIES_FETCHED";

export const movieFetched = (category, movies) => ({
  type: category.toUnderScore().toUpperCase() + "_MOVIES_FETCHED",
  movies,
});

// TV SHOWS
export const FETCHING_TV_SHOWS = "FETCHING_TV_SHOWS";
export const fetchingTvShows = () => ({
  type: "FETCHING_TV_SHOWS"
});

export const SHOWING_TODAY_TV_SHOWS_FETCHED = "SHOWING_TODAY_TV_SHOWS_FETCHED";
export const TOP_RATED_TV_SHOWS_FETCHED = "TOP_RATED_TV_SHOWS_FETCHED";
export const POPULAR_TV_SHOWS_FETCHED = "POPULAR_TV_SHOWS_FETCHED";

export const tvShowsFetched = (category, tvShows) => ({
  type: category.toUnderScore().toUpperCase() + "_TV_SHOWS_FETCHED",
  tvShows,
});
