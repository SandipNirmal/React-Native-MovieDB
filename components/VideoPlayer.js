import React from 'react';
import {WebView} from 'react-native';

import style from './../styles/styles';

const VideoPlayer = (props) => {
    return (
        <WebView
            style={[style.videoPlayerContainer, style.backdropSize]}
            javaScriptEnabled={true}
            domStorageEnabled={true}
            // allowsInlineMediaPlayback={true}
            // mediaPlaybackRequiresUserAction={false}
            source={{uri: props.url }}
        />
    );
}

export default VideoPlayer;
