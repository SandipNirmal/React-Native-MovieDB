import { combineReducers } from 'redux';
import movies from './movies';
import tvShows from './tvShows';
import configuration from './configuration';
import settings from './settings';
import navigation from './navigation';

const laLune = combineReducers({
  movies,
  tvShows,
  configuration,
  settings,
  navigation,
});
export default laLune;
