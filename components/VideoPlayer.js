import React from 'react';
import {WebView} from 'react-native';

import style from './../styles/styles';

const VideoPlayer = (props) => {
    console.log(props.url);
    return (
        <WebView
            style={[style.videoPlayerContainer, style.backdropSize]}
            javaScriptEnabled={true}
            domStorageEnabled={true}
            source={{uri: props.url }}
        />
    );
}

export default VideoPlayer;
