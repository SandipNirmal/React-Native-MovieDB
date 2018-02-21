import React, {Component} from 'react'
import {Image, StyleSheet, Text} from 'react-native'
import PropTypes from 'prop-types'

const BackgroundImage = (props) => {
  return (
    <Image
      // style={[Style.absoluteImage, {opacity: props.opacity}]}
      style={[Style.absoluteImage]}
      source={{uri: props.uri}}
      // blurRadius={props.blur || 0}
    />
  )
}

BackgroundImage.propTypes = {
  uri: PropTypes.string.isRequired,
  opacity: PropTypes.number,
  blur: PropTypes.number
}

const Style = StyleSheet.create({
  absoluteImage: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default BackgroundImage
