import initialState from '../State';
import {
  SETTINGS_LANGUAGE_CHANGED, 
  SETTINGS_REGION_CHANGED,
  SETTINGS_THEME_CHANGED,
  FETCH_SETTINGS,
  SAVE_SETTINGS
} from './../Actions';

export default function settings(state = initialState['settings'], action) {
  switch (action.type) {
    case FETCH_SETTINGS:
      return action.payload;
    
    case SAVE_SETTINGS:
      return action.payload;

    case SETTINGS_LANGUAGE_CHANGED:
      return Object.assign({}, state, {language: action.payload});

    case SETTINGS_REGION_CHANGED:
      return Object.assign({}, state, {region: action.payload});

    case SETTINGS_THEME_CHANGED:
      return Object.assign({}, state, {theme: action.payload});
  }
  return state;
}
