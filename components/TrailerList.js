import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import {Icon} from 'react-native-elements';

import style from './../styles/styles';

const Trailer = (props) => {
    return (
        <View>
            <Text style={[style.text, style.headingText]}>Trailers</Text>
            <ScrollView horizontal 
                showsHorizontalScrollIndicator={false}
                style={style.posterList}>
            {props.videos.map((video, index) => (
                <View key={index} >
                    <Text style={[style.text, style.normalText, style.trailerTitle]}>
                        {video.name}
                    </Text>
                    <View style={[style.backdropSize, style.trailerContainer]}>
                    <Icon name='youtube-play' type='font-awesome' size={50} color='#ff0000' style={style.trailerPlayIcon}/>
                    </View>
                    {/* <Text style={[style.text, style.normalText]}>
                        {video.url}
                    </Text> */}
                </View>
            ))}
            </ScrollView>
        </View>
    )
}

export default Trailer;
