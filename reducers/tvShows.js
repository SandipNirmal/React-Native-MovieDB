import initialState from '../State';
import * as A from '../Actions';

function tvShows(state=initialState['tvShows'], action) {
  let newState = JSON.parse(JSON.stringify(state));
  switch(action.type) {
    case A.LANGUAGE_CHANGED: break;
    case A.REGION_CHANGED: break;
    case A.FETCHING_TV_SHOWS:
      newState.isFetching = true;
      return newState;
    case A.SHOWING_TODAY_TV_SHOWS_FETCHED:
      newState.isFetching = false;
      newState.categories['showingToday'] = action.tvShows;
      return newState;
    case A.TOP_RATED_TV_SHOWS_FETCHED:
      newState.categories['topRated'] = action.tvShows;
      return newState;
    case A.POPULAR_TV_SHOWS_FETCHED:
      newState.categories['popular'] = action.tvShows;
      return newState;
    case A.TV_SHOW_SELECTED:
      // We can choose to cache the movies. is that necessary?
      newState.details = Object.assign({}, newState.details, action.tvShow);
      return newState;
    case A.TV_SHOW_DETAILS_FETCHED:
      // TODO make the category a const variable
      if (action.category === 'imagesAndVideos') {
        newState.details = Object.assign({}, newState.details, action.details);
      } else if (action.category === 'directorsAndCast') {
        newState.details['directors'] = action.details['directors'];
        newState.details['casts'] = action.details['casts'];
      }
      return newState;
    default: return state;
  }
}

export default tvShows;
