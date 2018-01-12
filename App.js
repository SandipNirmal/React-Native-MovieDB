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
      <View style={{flex: 1}}>
        {/* <StatusBar /> // style the bar */}
        <AppRoot />
        </View>
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
