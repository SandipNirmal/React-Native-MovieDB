import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Icon} from 'react-native-elements';
import PropTypes from 'prop-types';

import style from './../styles/styles';

const MovieInfo = (props) => {
    return (
        <View style={Style.container}>
            <View style={Style.infoItems}>
                <Icon name='event' color="#32CD32"/>
                <Text style={[style.text, Style.infoText]}>
                    {props.releaseDate}
                </Text>
            </View>
            <View style={Style.infoItems}>
                <Icon name='schedule' color="#32CD32"/>
                <Text style={[style.text, Style.infoText]}>
                    {props.runtime} Min
                </Text>
            </View>
            <View style={Style.infoItems}>
                <Icon name='stars' color="#32CD32"/>
                <Text style={[style.text, Style.infoText]}>
                    {props.ratings}
                </Text>
            </View>
        </View>
    );
}

const Style = StyleSheet.create({
    container: {
        display: 'flex',
        paddingTop: 6,
        marginBottom: 15,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginLeft: 5
    },
    infoItems: {
        display: 'flex',
        flexDirection: 'row'
    },
    infoText: {
        fontSize: 14,
        lineHeight: 24,
        paddingLeft: 3
    }
});

MovieInfo.propTypes = {
    releaseDate: PropTypes.string.isRequired,
    runtime: PropTypes.number.isRequired,
    ratings: PropTypes.number.isRequired
}

export default MovieInfo;
