import initialState from '../State';
import * as A from '../Actions';

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
    case A.MOVIE_SELECTED:
      // We can choose to cache the movies. is that necessary?
      newState.details = Object.assign({}, newState.details, action.movie);
      return newState;
    case A.MOVIE_DETAILS_FETCHED:
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

export default movies;
