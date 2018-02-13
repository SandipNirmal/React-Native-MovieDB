import initialState from '../State';
import {
  SETTINGS_LANGUAGE_CHANGED, 
  SETTINGS_REGION_CHANGED,
  SETTINGS_THEME_CHANGED
} from './../Actions';

export default function settings(state = initialState['settings'], action) {
  // console.log('Action', action);

  switch (action.type) {
    case SETTINGS_LANGUAGE_CHANGED:
      return state;

    case SETTINGS_REGION_CHANGED:
      return state;

    case SETTINGS_THEME_CHANGED:
      return state;
  }
  return state;
}
