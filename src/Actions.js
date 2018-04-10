import axios from 'axios'

// CONFIGURATION
export const CONFIG_FETCHED = 'CONFIG_FETCHED'
export const configFetched = config => ({ type: 'CONFIG_FETCHED', config })

// Layout
export const LAYOUT_CHANGED = 'LAYOUT_CHANGED'
export const layoutChanged = () => ({ type: LAYOUT_CHANGED })

export * from './actions/castActions'
export * from './actions/moviesActions'
export * from './actions/tvShowsActions'
export * from './actions/settingsActions'
export * from './actions/searchActions'
export * from './actions/seasonActions'
