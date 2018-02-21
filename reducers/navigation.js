import AppNavigator from '../router'

// Refer https://github.com/react-navigation/react-navigation/issues/2332
// to understand why we keep initialState as undefined
const initialState = undefined
const navigationReducer = (state = initialState, action) => {
  const newState = AppNavigator.router.getStateForAction(action, state)
  return newState || state
}

export default navigationReducer
