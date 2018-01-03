import React, {
    Component
  } from 'react';
  import {
    View,
    Text,
    StyleSheet
  } from 'react-native';
  
  export default class Movies extends Component {
    render() {
      return (
          <View>
              <Text style={styles.container}>Search</Text>
          </View>
      );
    }
  }
  
  const styles = StyleSheet.create({
    container: {
      textAlign: 'center',
      top: 50
    },
  });