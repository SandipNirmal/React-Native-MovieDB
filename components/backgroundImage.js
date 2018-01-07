import React, {Component} from 'react';
import {Image, StyleSheet, Text} from 'react-native';
import PropTypes from 'prop-types';

const bgImage = 'http://image.tmdb.org/t/p/w300/adw6Lq9FiC9zjYEpOqfq03ituwp.jpg';
const resizeMode = 'cover';

const BackgroundImage = (props) => {

    return (
        <Image
            style={Style.absoluteImage}
            source={{
            uri: bgImage
        }}>
            {props.children}
        </Image>
    )
}

BackgroundImage.propTypes = {
    uri: PropTypes.string.isRequired
}

const Style = StyleSheet.create({
    backgroundImage: {
        flex: 1,
        width: null,
        height: null,
        resizeMode: 'cover'
    },
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

export default BackgroundImage;
