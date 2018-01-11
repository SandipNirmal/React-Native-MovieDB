import React from 'react';
import {
  StyleSheet,
  View,
  StatusBar
} from 'react-native';

import {
  AppRoot
} from './router';

export default class App extends React.Component {
  render() {
    return (
        <AppRoot />
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
