import React from 'react';
import {Image, TouchableOpacity, ScrollView} from 'react-native';
import PropTypes from 'prop-types'; 

import style from './../styles/styles';

const ImageList = (props) => {
    return (
        <ScrollView horizontal>
            {props
                .images
                .map((image, index) => (
                    <TouchableOpacity key={index} style={style.posterSize}>
                        <Image
                            style={style.posterSize}
                            source={{
                            uri: image
                        }}/>
                    </TouchableOpacity>
                ))}
        </ScrollView>
    );
};

ImageList.propTypes = {
    images: PropTypes.array.isRequired
}

export default ImageList;