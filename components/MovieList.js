import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Image,
  Text, TouchableOpacity,
  ScrollView, StyleSheet,
  View,
} from 'react-native';

import style from './../styles/styles';

const MovieList = (props) => (
  <View style={styles.container}>
    <Title {...props} />
    <ScrollView horizontal 
      showsHorizontalScrollIndicator={false}
      style={styles.posterList}>
      {props.movies.map((movie, index) => (
        <TouchableOpacity
          key={index}
          style={styles.posterSize}
          onPress={() => props.onPress(movie.name)}>
          <Image
            style={styles.posterSize}
            source={{uri: movie.uri}}
          />
        </TouchableOpacity>
      ))}
    </ScrollView>
  </View>
);

const Title = (props) => (
  <View style={styles.titleContainer}>
    <Text style={[style.text, style.headingText]}>
      {props.title}
    </Text>
    <TouchableOpacity onPress={() => props.onShowAll(props.title)}>
      <Text style={[style.text, style.normalText]}>
        See All &gt;
      </Text>
    </TouchableOpacity>
  </View>
)

Title.propTypes = MovieList.propTypes = {
  title: PropTypes.string.isRequired,
  movies: PropTypes.array.isRequired,
  onPress: PropTypes.func.isRequired,
  onShowAll: PropTypes.func.isRequired,
}

const styles = StyleSheet.create({
  // TODO: does ios have a standard? if so use that
  // Image size for poster size w92 on TMDB
  container: {
    marginTop: 20,
    marginBottom: 20,
  },
  posterSize: {
    width: 92,
    height: 136,
    margin: 5,
  },
  posterList: {
    flexDirection: 'row',
  },
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: 5,
  },
  titleText: {
    fontSize: 24,
    margin: 5,
  },
});

export default MovieList;
