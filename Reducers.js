import { combineReducers } from 'redux';
import initialState from './State';
import * as A from './Actions';


// Reducers
function movies(state=initialState['movies'], action) {
  let newState = JSON.parse(JSON.stringify(state));
  switch(action.type) {
    case A.LANGUAGE_CHANGED: break;
    case A.REGION_CHANGED: break;
    case A.FETCHING_MOVIES:
      newState.isFetching = true;
      return newState;
    case A.NOW_SHOWING_MOVIES_FETCHED:
      newState.isFetching = false;
      newState.categories['nowShowing'] = action.movies;
      return newState;
    case A.COMING_SOON_MOVIES_FETCHED: 
      newState.categories['comingSoon'] = action.movies;
      return newState;
    case A.POPULAR_MOVIES_FETCHED:
      newState.categories['popular'] = action.movies;
      return newState;
    default: return state;
  }
}

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
    default: return state;
  }
}

function image(state=initialState['image'], action) {
  return state;
}

function settings(state=initialState['settings'], action) {
  return state;
}

const laLune = combineReducers({movies, tvShows, image, settings});
export default laLune;


