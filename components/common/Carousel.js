import React, { Component } from 'react';
import { connect } from 'react-redux';
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
    style={style.flexContainer}
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


const TitledImage = (props) => (
  <View>
    <Image
      style={props.carouselStyle}
      source={{uri: props.image.uri}}
    />
    <View style={styles.absoluteTitle}>
      <Text style={[style.titleText, styles.titleText]}>
        {props.image.original_title}
      </Text>
    </View>
  </View>
)

const mapStateToProps = state => ({carouselStyle: state.configuration.style.carousel});
const ImageWithTitle = connect(mapStateToProps)(TitledImage);

const styles = StyleSheet.create({
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
