import initialState from '../State'
import {
  FETCH_SETTINGS,
  SAVE_SETTINGS
} from './../Actions'

export default function settings (state = initialState['settings'], action) {
  switch (action.type) {
    case FETCH_SETTINGS:
      return action.payload

    case SAVE_SETTINGS:
      return action.payload ? action.payload : state

    default:
      return state
  }
}
