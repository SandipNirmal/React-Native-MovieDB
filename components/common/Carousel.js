import React, { Component } from 'react';
import {
  Dimensions,
  Image,
  ScrollView, StyleSheet,
  Text, TouchableOpacity,
  View,
} from 'react-native';

import style from './../../styles/styles';

const Carousel = (props) => (
  <ScrollView 
    horizontal
    pagingEnabled
    showsHorizontalScrollIndicator={false}
    style={styles.container}
  >
    {props.images.map((image, index) => (
      <TouchableOpacity
        key={index}
        style={styles.posterSize}
        onPress={() => props.onPress(image)}>
        <ImageWithTitle image={image} />
      </TouchableOpacity>
    ))}
  </ScrollView>
);


const ImageWithTitle = (props) => (
  <View>
    <Image
      style={styles.posterSize}
      source={{uri: props.image.uri}}
    />
    <View style={styles.absoluteTitle}>
      <Text style={[style.titleText, styles.titleText]}>
        {props.image.original_title}
      </Text>
    </View>
  </View>
)

var {width, height} = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  posterSize: {
    flexGrow:1,
    // height: (height * (1 - 0.618)),
    height: 180,
    width: width,
  },
  absoluteTitle: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 10, 
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  titleText: {
    fontSize: 20,
    backgroundColor: 'transparent',
    color: 'white'
  }
});

export default Carousel;
