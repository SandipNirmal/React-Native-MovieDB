import React, {Component} from 'react';
import {createStore, applyMiddleware} from 'redux';
import {Provider, connect} from 'react-redux';
import {StyleSheet, View, StatusBar} from 'react-native';
import Orientation from 'react-native-orientation';
import promise from 'redux-promise';

import AppNavigation from './components/AppNavigation';
import SplashScreen from './components/SplashScreen';
import LaLune from './reducers/root';

class Screen extends Component {
  render() {
    const {isFetching} = this.props;
    const screen = isFetching
      ? <SplashScreen/>
      : <AppNavigation/>;
    return screen;
  }
}

// TODO - Use redux-promise middleware properly
// https://medium.com/react-native-training/redux-4-ways-95a130da0cdc
const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

const mapStateToProps = state => ({isFetching: state.movies.isFetching});
const AppRoot = connect(mapStateToProps, null)(Screen);

export default class App extends Component {
  // Component did mount event
  componentDidMount() {
    Orientation.lockToPortrait();
  }

  render() {
    return (
      <Provider store={createStoreWithMiddleware(LaLune)}>
        <View style={styles.container}>
          <AppRoot/>
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#040404'
  }
});
