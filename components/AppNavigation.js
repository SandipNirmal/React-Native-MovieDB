import React, { Component } from "react";
import { connect } from "react-redux";
import { addNavigationHelpers } from "react-navigation";
import MainScreen from "../router";

class AppNavigation extends Component {
  render() {
    const { navigationState, dispatch } = this.props;
    return (
      <MainScreen
        navigation={addNavigationHelpers({ dispatch, state: navigationState })}
      />
    );
  }
}

const mapStateToProps = state => ({
  navigationState: state.navigation,
});

export default connect(mapStateToProps)(AppNavigation);
