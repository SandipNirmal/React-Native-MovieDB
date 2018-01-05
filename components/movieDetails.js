import React, {Component} from 'react';
import {View, Text, StyleSheet, ScrollView, ActivityIndicator} from 'react-native';
import {Avatar, Tile} from 'react-native-elements';

export default class MovieDetails extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoading: true,
            list: []
        };
    }

    componentDidMount() {
        return fetch('https://facebook.github.io/react-native/movies.json').then((response) => response.json()).then((responseJson) => {
            this
                .setState({
                    isLoading: false,
                    list: responseJson
                }, function () {
                    // do something with new state
                });
        }).catch((error) => {
            console.error(error);
        });
    }

    render() {
        if (this.state.isLoading) {
            return (
                <View
                    style={{
                    flex: 1,
                    paddingTop: 20
                }}>
                    <ActivityIndicator/>
                </View>
            );
        }

        return (
            <View>
                <Text>Cast :</Text>
                <ScrollView horizontal>
                    {/* <Text style={{fontSize:96}}>Scroll me plz</Text>
                  <Text style={{fontSize:96}}>Scroll me plz</Text>
                  <Text style={{fontSize:96}}>Scroll me plz</Text>
                  <Text style={{fontSize:96}}>Scroll me plz</Text> */}
                    <Avatar
                        small
                        rounded
                        source={{
                        uri: "https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg"
                    }}
                        onPress={() => console.log("Works!")}
                        activeOpacity={0.7}/>
                    <Avatar
                        small
                        rounded
                        source={{
                        uri: "https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg"
                    }}
                        onPress={() => console.log("Works!")}
                        activeOpacity={0.7}/>
                    <Avatar
                        small
                        rounded
                        source={{
                        uri: "https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg"
                    }}
                        onPress={() => console.log("Works!")}
                        activeOpacity={0.7}/>
                    <Avatar
                        small
                        rounded
                        source={{
                        uri: "https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg"
                    }}
                        onPress={() => console.log("Works!")}
                        activeOpacity={0.7}/>
                    <Avatar
                        small
                        rounded
                        source={{
                        uri: "https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg"
                    }}
                        onPress={() => console.log("Works!")}
                        activeOpacity={0.7}/>
                    <Avatar
                        small
                        rounded
                        source={{
                        uri: "https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg"
                    }}
                        onPress={() => console.log("Works!")}
                        activeOpacity={0.7}/>
                    <Avatar
                        small
                        rounded
                        source={{
                        uri: "https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg"
                    }}
                        onPress={() => console.log("Works!")}
                        activeOpacity={0.7}/>
                    <Avatar
                        small
                        rounded
                        source={{
                        uri: "https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg"
                    }}
                        onPress={() => console.log("Works!")}
                        activeOpacity={0.7}/>
                    <Avatar
                        small
                        rounded
                        source={{
                        uri: "https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg"
                    }}
                        onPress={() => console.log("Works!")}
                        activeOpacity={0.7}/>
                    <Avatar
                        small
                        rounded
                        source={{
                        uri: "https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg"
                    }}
                        onPress={() => console.log("Works!")}
                        activeOpacity={0.7}/>
                    <Avatar
                        small
                        rounded
                        source={{
                        uri: "https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg"
                    }}
                        onPress={() => console.log("Works!")}
                        activeOpacity={0.7}/>
                    <Avatar
                        small
                        rounded
                        source={{
                        uri: "https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg"
                    }}
                        onPress={() => console.log("Works!")}
                        activeOpacity={0.7}/>
                    <Avatar
                        small
                        rounded
                        source={{
                        uri: "https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg"
                    }}
                        onPress={() => console.log("Works!")}
                        activeOpacity={0.7}/>
                    <Avatar
                        small
                        rounded
                        source={{
                        uri: "https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg"
                    }}
                        onPress={() => console.log("Works!")}
                        activeOpacity={0.7}/>
                    <Avatar
                        small
                        rounded
                        source={{
                        uri: "https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg"
                    }}
                        onPress={() => console.log("Works!")}
                        activeOpacity={0.7}/>
                    <Avatar
                        small
                        rounded
                        source={{
                        uri: "https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg"
                    }}
                        onPress={() => console.log("Works!")}
                        activeOpacity={0.7}/>
                    <Avatar
                        small
                        rounded
                        source={{
                        uri: "https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg"
                    }}
                        onPress={() => console.log("Works!")}
                        activeOpacity={0.7}/>
                    <Avatar
                        small
                        rounded
                        source={{
                        uri: "https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg"
                    }}
                        onPress={() => console.log("Works!")}
                        activeOpacity={0.7}/>
                    <Avatar
                        small
                        rounded
                        source={{
                        uri: "https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg"
                    }}
                        onPress={() => console.log("Works!")}
                        activeOpacity={0.7}/>
                    <Avatar
                        small
                        rounded
                        source={{
                        uri: "https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg"
                    }}
                        onPress={() => console.log("Works!")}
                        activeOpacity={0.7}/>
                </ScrollView>

                <Tile
                    imageSrc={{
                    uri: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg'
                }}
                    title="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores dolore exercitationem"
                    featured
                    caption="Some Caption Text"/>
            </View>
        );
    }
}
