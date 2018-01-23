import { combineReducers } from 'redux';
import initialState from './State';
import * as _ from 'lodash';
import * as A from './Actions';
import {Dimensions} from 'react-native';


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

function configuration(state=initialState['config'], action) {
  let newState = JSON.parse(JSON.stringify(state));
  const {width, height} = Dimensions.get('window');
  if(action.type === A.CONFIG_FETCHED) {
    const images = action.config.images;
    newState.image.secureBaseUrl = images.secure_base_url;
    // TODO add more conditions here. Refer
    // http://mediag.com/news/popular-screen-resolutions-designing-for-all/ or
    // similar documentation.
    // TODO Details page should make use of these values.
    if(_.inRange(width, 300, 600)) {
      newState.image.backdropSize = images.backdrop_sizes[1];
      newState.image.posterSizeForImageList = images.poster_sizes[1];
      newState.image.posterSizeForBackground = images.poster_sizes[5];
      newState.image.profileSize = images.profile_sizes[1];
    }
    return newState;
  }

  return state;
}

function settings(state=initialState['settings'], action) {
  return state;
}

const laLune = combineReducers({movies, tvShows, configuration, settings});
export default laLune;


