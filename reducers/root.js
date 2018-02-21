import {combineReducers} from 'redux'
import movies from './movies'
import tvShows from './tvShows'
import configuration from './configuration'
import settings from './settings'
import navigation from './navigation'
import search from './search'
import tabNavHelper from './tabNavHelper'
import CastsReducer from './casts'

const laLune = combineReducers({
  movies,
  tvShows,
  configuration,
  settings,
  navigation,
  search,
  tabNavHelper,
  cast: CastsReducer
})
export default laLune
