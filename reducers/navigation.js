import AppNavigator from "../router";

const initialState = AppNavigator.router.getStateForAction(
  AppNavigator.router.getActionForPathAndParams("Movies")
);

const navigationReducer = (state = initialState, action) => {
  const newState = AppNavigator.router.getStateForAction(action, state);
  return newState || state;
};

export default navigationReducer;
