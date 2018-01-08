import React, {Component} from 'react';
import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    ActivityIndicator
} from 'react-native';
import {Avatar, Tile} from 'react-native-elements';

import BackgroundImage from './backgroundImage';
import MovieInfo from './movieInfo';

import style from './../styles/styles';

export default class MovieDetails extends Component {
    static navigationOptions = ({navigation}) => ({
        title: navigation.state.params.name,
        headerTitleStyle: {
            color: '#a9a9a9'
        },
        headerStyle: {
            backgroundColor: 'black'
        }
    });

    constructor(props) {
        super(props);

        this.state = {
            isLoading: true,
            movieData: []
        };
    }

    componentDidMount() {
        return fetch('https://api.themoviedb.org/3/movie/550?api_key=b8a04ea374eece868a6690782c9e7536').then((response) => response.json()).then((responseJson) => {
            this
                .setState({
                    isLoading: false,
                    movieData: responseJson
                }, function () {
                    // do something with new state
                });
        }).catch((error) => {
            console.error(error);
        });
    }

    render() {
        const bgImage = 'http://image.tmdb.org/t/p/w300/adw6Lq9FiC9zjYEpOqfq03ituwp.jpg';

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
            <View style={{ flex: 1}}>
                <BackgroundImage uri={bgImage} />
                <ScrollView>
                    <View style={style.detailsContainer}>
                        <Text style={[style.text, style.titleText]}>
                            {this.state.movieData.title}
                        </Text>
                        {/* <Text style={[style.text, style.normalText]}>
                            {this.state.movieData.tagline}
                        </Text> */}

                        <MovieInfo 
                        releaseDate={this.state.movieData.release_date}
                        runtime={this.state.movieData.runtime}
                        ratings={this.state.movieData.vote_average}
                        />

                        <Text style={[style.text, style.normalText]}>
                            {this.state.movieData.overview}
                        </Text>

                        <Text style={[style.text, style.headingText]}>Photos</Text>

                        <Text style={[style.text, style.normalText]}>
                            {this.state.movieData.overview}
                        </Text>

                        <Text style={[style.text, style.headingText]}>Trailer</Text>

                        <Text style={[style.text, style.normalText]}>
                            {this.state.movieData.overview}
                        </Text>

                        <Text style={[style.text, style.headingText]}>Director</Text>

                        <Text style={[style.text, style.normalText]}>
                            {this.state.movieData.overview}
                        </Text>

                        <Text style={[style.text, style.headingText]}>Cast</Text>

                        <Text style={[style.text, style.normalText]}>
                            {this.state.movieData.overview}
                        </Text>
                    </View>
                </ScrollView>
            </View>
        );
    }
}
