import React, { Component } from "react";
import { connect } from "react-redux";
import { addNavigationHelpers } from "react-navigation";
import MainScreen from "../router";


// following is to resolve issue https://github.com/infinitered/ignite/issues/1225
// for react-navigation 1.0.0-beta.30
import {
  createReduxBoundAddListener,
  createReactNavigationReduxMiddleware,
} from 'react-navigation-redux-helpers';

const middleware = createReactNavigationReduxMiddleware(
  "root",
  state => state.nav,
);
const addListener = createReduxBoundAddListener("root");
// end for react-navigation 1.0.0-beta.30



class AppNavigation extends Component {
  render() {
    const { navigationState, dispatch } = this.props;
    return (
      <MainScreen
        navigation={addNavigationHelpers({
					dispatch,
          state: navigationState,
          addListener
        })}
      />
    );
  }
}

const mapStateToProps = state => ({
  navigationState: state.navigation,
});

export default connect(mapStateToProps)(AppNavigation);
