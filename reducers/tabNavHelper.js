import initialState from '../State'

const acceptedRoutes = ['Movies', 'TvShows', 'Search']
function tabNavHelper (state = initialState['helper'], action) {
  if (action.type === 'Navigation/NAVIGATE' &&
    acceptedRoutes.indexOf(action.routeName) !== -1) {
    return {
      'currentTab': action.routeName
    }
  }
  return state
}

export default tabNavHelper
