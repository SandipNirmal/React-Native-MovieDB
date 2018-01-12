import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Image,
  Text, TouchableOpacity,
  ScrollView, StyleSheet,
  View,
} from 'react-native';
import { TouchableImage, TouchableText } from './Touchable';
import * as _ from 'lodash';

import style from '../styles/styles';

const MovieList = (props) => (
  <View style={style.container}>
    <Title {...props} />
    <ScrollView horizontal 
      showsHorizontalScrollIndicator={false}
      style={styles.posterList}>
      {props.images.map((image, index) => (
        props.isTouchableImage ?
          <TouchableImage
            key={index}
            style={props.style}
            onPress={() => props.onPress(image)}
            uri={image.uri} 
          />
        : <Image
            key={index}
            style={props.style}
            source={{uri: _.isString(image) ? image : image.uri}}
          />
      ))}
    </ScrollView>
  </View>
);

// TODO: See All should be of normatText. Nesting of text should fix it
// since TouchableText is involved, the situaion gets complicated.Fix this
const Title = (props) => (
  <View style={styles.titleContainer}>
    <Text style={[style.text, style.headingText]}>
      {props.title}
    </Text>
    {
      props.hasSeeAllOption ?
        <TouchableText onPress={() => props.onShowAll(props.title)}
          text="See All &gt;"
        />
      : null
    }
  </View>
)

Title.propTypes = MovieList.propTypes = {
  title: PropTypes.string.isRequired,
  images: PropTypes.array.isRequired,
  isTouchableButton: PropTypes.bool,
  hasSeeAllOption: PropTypes.bool,
  onPress: (props, thisProp) => {
    if(props['isTouchableButton'] && 
      (!props[thisProp] || typeof(props[thisProp]) !== 'function')) {
      return new Error("onPress is required when isTouchableButton is true!");
    } else {
      return null;
    }
  },
  onShowAll: (props, thisProp) => {
    if(props['hasSeeAllOption'] && 
      (!props[thisProp] || typeof(props[thisProp]) !== 'function')) {
      return new Error("onShowAll is required when hasSeeAllOption is true!");
    } else {
      return null;
    }
  },
}

const styles = StyleSheet.create({
  // TODO: does ios have a standard? if so use that
  // Image size for poster size w92 on TMDB
  posterList: {
    flexDirection: 'row',
  },
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: 5,
  },
});

export default MovieList;
