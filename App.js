import React from 'react';
import { createStore  } from 'redux';
import { Provider } from 'react-redux';
import {
  StyleSheet,
  View,
  StatusBar
} from 'react-native';
import Orientation from 'react-native-orientation';
import { connect } from 'react-redux';

import MainScreen from './router';
import SplashScreen from './components/SplashScreen';
import LaLune from './Reducers';

let store = createStore(LaLune);

class Screen extends React.Component {
  render() {
    const { isFetching } = this.props;
    const screen = isFetching ? <SplashScreen /> : <MainScreen />;
    return screen;
  }
}

const mapDispatchToProps = dispatch => ({});
const mapStateToProps = state => ({
  isFetching: state.movies.isFetching,
});

const AppRoot = connect(mapStateToProps, mapDispatchToProps)(Screen);

export default class App extends React.Component {

  // Component did mount event
  componentDidMount() {
    Orientation.lockToPortrait();
  }

  render() {
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <AppRoot />
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#040404',
  },
});
