import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import {Icon} from 'react-native-elements';

import style from './../styles/styles';

import VideoPlayer from './VideoPlayer';

const Trailer = (props) => {
    return (
        <View>
            <Text style={[style.text, style.headingText, style.detailHeadings]}>Trailers</Text>
            <ScrollView horizontal 
                showsHorizontalScrollIndicator={false}
                style={style.posterList}>
            {props.videos.map((video, index) => (
                <View key={index} >
                    <VideoPlayer url={video.url}/>
                </View>
            ))}
            </ScrollView>
        </View>
    )
}

export default Trailer;
