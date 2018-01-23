import React from 'react';
import { createStore  } from 'redux';
import { Provider } from 'react-redux';
import {
  StyleSheet,
  View,
  StatusBar
} from 'react-native';

import { AppRoot } from './router';
import LaLune from './Reducers';

let store = createStore(LaLune);

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <View style={{flex: 1}}>
          {/* <StatusBar /> // style the bar */}
          <AppRoot />
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
