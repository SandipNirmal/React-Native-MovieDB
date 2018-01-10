import React, {Component} from 'react';
import {
    Image,
    Text,
    TouchableOpacity,
    ScrollView,
    StyleSheet,
    View,
    Alert
} from 'react-native';
import PropTypes from 'prop-types';

import style from './../styles/styles';

export default class CastList extends Component {

    showCastDetails() {
        // this.props.navigation.navigate('CastDetails', {name: 'Christain Bale'});

        // Works on both iOS and Android
        Alert.alert('Cast Details', 'Takes user to cast details scren.', [
            {
                text: 'OK',
                onPress: () => console.log('Go to Details')
            }
        ], {cancelable: false})
    }

    render() {
        return (
            <View>
                <Text style={[style.text, style.headingText]}>
                    {this.props.title}
                </Text>
                <ScrollView horizontal>
                    {this
                        .props
                        .items
                        .map((item, index) => (
                            <TouchableOpacity
                                key={index}
                                style={style.avatarContaier}
                                onPress={this.showCastDetails.bind(this)}>
                                <Image
                                    style={style.avatarSize}
                                    source={{
                                    uri: item.imageSrc
                                }}/>
                                <Text 
                                    style={[style.text, style.normalText, style.avatarText]}
                                    numberOfLines={1} 
                                    ellipsizeMode='tail'>
                                    {item.name}
                                </Text>
                            </TouchableOpacity>
                        ))}
                </ScrollView>
            </View>
        );
    }
}
