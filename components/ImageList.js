import React from 'react';
import {Image, TouchableOpacity, ScrollView, View, Text} from 'react-native';
import PropTypes from 'prop-types';

import style from './../styles/styles';

const ImageList = (props) => {
    return (
        <View>
            <Text style={[style.text, style.headingText]}>Photos</Text>
            <ScrollView horizontal>
                {props
                    .images
                    .map((image, index) => (
                        <Image
                            style={style.posterSize}
                            key={index}
                            source={{
                            uri: image
                        }}/>
                    ))}
            </ScrollView>
        </View>
    );
};

ImageList.propTypes = {
    images: PropTypes.array.isRequired
}

export default ImageList;