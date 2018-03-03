import {combineReducers} from 'redux'
import movies from './movies'
import tvShows from './tvShows'
import configuration from './configuration'
import settings from './settings'
import navigation from './navigation'
import search from './search'
import tabNavHelper from './tabNavHelper'
import CastsReducer from './casts'
import SeasonReducer from './seasons';

const laLune = combineReducers({
  movies,
  tvShows,
  configuration,
  settings,
  navigation,
  search,
  tabNavHelper,
  cast: CastsReducer,
  season: SeasonReducer
})

export default laLune
