import React, { Component } from 'react'
import {Image, View, StyleSheet} from 'react-native'
import PropTypes from 'prop-types'

const grey = {
  lighter: '#FAFAFA',
  light: '#F5F5F5',
  normal: '#EEEEEE',
  darker: '#E0E0E0',
  dark: '#BDBDBD'
}

class ImageComponent extends Component {
  constructor (props) {
    super(props)
    this.state = {
      loading: false
    }
  }

  onLoading = () => {
    this.setState({loading: true})
  }

  loadSuccess = () => {
    this.setState({loading: false})
  }

  render () {
    const {url, ...others} = this.props
    const {loading} = this.state

    return (
      <View className={style.loading}>
        <Image
          onLoadStart={this.onLoading}
          onLoad={this.loadSuccess}
          source={{
            uri: url
          }}
          {...others}
          style={{display: `${loading ? 'none' : 'flex' }`}}
        />
        {loading && <View className={style.loading} {...others}/>}
      </View>
    )
  }
}

ImageComponent.propTypes = {
  url: PropTypes.string
}

const style = StyleSheet.create({
  // '@keyframes loading': {
  //   '0%': {backgroundColor: grey.light},
  //   '20%': {backgroundColor: grey.normal},
  //   '40%': {backgroundColor: grey.darker},
  //   '60%': {backgroundColor: grey.dark},
  //   '85%': {backgroundColor: grey.darker},
  //   '100%': {backgroundColor: grey.normal}
  // },
  loading: {
    // animationDuration: `1s`,
    // animationName: `loading`,
    // animationIterationCount: `infinite`,
    // animationTimingFunction: 'ease-out'
    backgroundColor: '#FFFFFF',
    width: 80,
    height: 80,
    borderRadius: 40
  },
})

export default ImageComponent
