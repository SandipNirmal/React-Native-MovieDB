import { combineReducers } from 'redux';
import movies from './movies';
import tvShows from './tvShows';
import configuration from './configuration';
import settings from './settings';
import navigation from './navigation';
import search from './search';
import tabNavHelper from './tabNavHelper';

const laLune = combineReducers({
  movies,
  tvShows,
  configuration,
  settings,
  navigation,
  search,
  tabNavHelper,
});
export default laLune;
