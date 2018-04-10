import { AsyncStorage } from 'react-native'
import theme from 'react-native-theme'

import initialState from './../State'

// Settings
const SETTINGS_KEY = 'Settings'
export const SETTINGS_LANGUAGE_CHANGED = 'SETTINGS_LANGUAGE_CHANGED'
export const SETTINGS_REGION_CHANGED = 'SETTINGS_REGION_CHANGED'
export const SETTINGS_THEME_CHANGED = 'SETTINGS_THEME_CHANGED'
export const FETCH_SETTINGS = 'FETCH_SETTINGS'
export const SAVE_SETTINGS = 'SAVE_SETTINGS'

export const fetchSettingsAction = async () => {
  const payload =
    JSON.parse(await AsyncStorage.getItem(SETTINGS_KEY)) ||
    initialState['settings']
  return { type: FETCH_SETTINGS, payload }
}

export const saveSettingsAction = async (values = initialState['settings']) => {
  try {
    await AsyncStorage.setItem(SETTINGS_KEY, JSON.stringify(values))

    // TODO - Might need to seperate each settings action handlers
    if (theme.name !== values.theme) {
      theme.active(values.theme)
    }

    return { type: SAVE_SETTINGS, payload: values }
  } catch (e) {
    return { type: SAVE_SETTINGS, payload: null }
  }
}
