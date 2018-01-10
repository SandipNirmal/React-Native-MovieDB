import React, { Component } from 'react';
import {
  Dimensions,
  Image,
  ScrollView, StyleSheet,
  Text, TouchableOpacity,
  View,
} from 'react-native';

const Carousel = (props) => (
  <ScrollView 
    horizontal
    pagingEnabled
    showsHorizontalScrollIndicator={false}
    style={styles.container}
  >
    {props.movies.map((movie, index) => (
      <TouchableOpacity
        key={index}
        style={styles.posterSize}
        onPress={() => props.onPress(movie)}>
        <ImageWithTitle movie={movie} />
      </TouchableOpacity>
    ))}
  </ScrollView>
);


const ImageWithTitle = (props) => (
  <View>
    <Image
      style={styles.posterSize}
      source={{uri: props.movie.uri}}
    />
    <View style={styles.absoluteTitle}>
      <Text style={styles.titleText}>
        {props.movie.original_title}
      </Text>
    </View>
  </View>
)

var deviceWidth = Dimensions.get('window').width;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  posterSize: {
    flexGrow:1,
    height: 250,
    width: deviceWidth,
  },
  absoluteTitle: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0, 
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  titleText: {
    fontSize: 32,
    fontWeight: 'bold',
    fontFamily: 'Cochin',
    textAlign: 'center',
    backgroundColor: 'rgba(0,0,0,0)',
    color: 'white'
  }
});

export default Carousel;
