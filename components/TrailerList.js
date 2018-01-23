import React from 'react';
import {View, Text, ScrollView} from 'react-native';

import TrailerItem from './TrailerItem';
import style from './../styles/styles';

const Trailer = (props) => {
    return (
        <View>
            <Text style={[style.text, style.headingText, style.detailHeadings]}>Trailers</Text>
            <ScrollView horizontal 
                showsHorizontalScrollIndicator={false}
                style={style.posterList}>
            {props.videos.map((video, index) => (
                // <View key={index} >
                //     <VideoPlayer url={video.url}/>
                // </View>
                <TrailerItem key={index} video={video} onPlay={props.playVideo}/>
              ))}
            </ScrollView>
        </View>
    )
}

export default Trailer;
