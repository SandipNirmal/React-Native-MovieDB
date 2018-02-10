import initialState from '../State';
import * as A from '../Actions';

const search = (state=initialState['search'], action) => {
  // TODO : optimise
  let newState = JSON.parse(JSON.stringify(state));
  switch(action.type) {
    case A.SEARCHING_MOVIES_ETC:
      newState.isSearching = true;
      return newState;
    case A.DONE_SEARCHING_MOVIES_ETC:
      newState.isSearching = false;
      newState.results = action.results;
      return newState;
    case A.SEARCH_FILTER_CHANGED:
      newState.selectedIndex = action.index;
      return newState;
    case A.SEARCH_RESULT_SELECTED:
      // We can choose to cache the movies. is that necessary think?
      newState.details = Object.assign({}, newState.details, action.result);
      return newState;
    case A.SEARCH_ITEM_DETAILS_FETCHED :
      // TODO make the category a const variable
      if (action.category === 'imagesAndVideos') {
        newState.details = Object.assign({}, newState.details, action.details);
      } else if (action.category === 'directorsAndCast') {
        newState.details['directors'] = action.details['directors'];
        newState.details['casts'] = action.details['casts'];
      }
      return newState;
    default:
      return state;
  }
}

export default search;
