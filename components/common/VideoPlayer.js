import React, {Component} from 'react';
import {WebView, StyleSheet} from 'react-native';

import style from '../../styles/styles';
import Orientation from 'react-native-orientation';

export default class VideoPlayer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      url: this.props.navigation.state.params.url,
    }
  }

  componentWillMount(){
    Orientation.lockToLandscape()
  }

  componentWillUnmount() {
    Orientation.lockToPortrait()
  }

  render() {
    return (
      <WebView
        style={style.videoPlayerContainer}
        javaScriptEnabled={true}
        domStorageEnabled={true}
        allowsInlineMediaPlayback={true}
        mediaPlaybackRequiresUserAction={false}
        source={{uri: this.state.url}}
        // source={{html: `<iframe width="560" height="315"
        // src="https://www.youtube.com/embed/D6Ac5JpCHmI?&autoplay=1&controls=1"></iframe>` }}
      />
    );
  }
}
