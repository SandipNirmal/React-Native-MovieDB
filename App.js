import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default class App extends React.Component {
  render() {
    let pic = {
      uri: 'http://image.tmdb.org/t/p/w500/gjOiE5EYH5sqcJYlSDZnVWRMgNV.jpg'
    };
    return (
      <View style={styles.container}>
      <Text>Movie Image</Text>
      <Image source={pic} style={{width: 193, height: 110}}/>
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
