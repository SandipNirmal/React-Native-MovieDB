import React, {Component} from 'react';
import {View, Text, StyleSheet, ScrollView, ActivityIndicator} from 'react-native';
import {Avatar, Tile} from 'react-native-elements';

import BackgroundImage from './BackgroundImage';
import MovieInfo from './MovieInfo';
import ImageList from './ImageList';

import {Configuration} from '../data/configuration';
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
            movieData: [],
            images: [],
            videos: []
        };
    }

    componentDidMount() {
        // return fetch('./../data/movieDetail.json')
        return fetch('https://api.themoviedb.org/3/movie/550?api_key=b8a04ea374eece868a6690782c9e7536&append_to_response=videos,images')
            .then((response) => response.json())
            .then((response) => {
                this.setState({
                    isLoading: false,
                    movieData: response
                });
                
                this.formImageUrls(response.images.posters);
                this.formVideoUrls(response.videos.results);
        }).catch((error) => {
            console.error(error);
        });
    }

    /**
     * Forms Images URL's
     */
    formImageUrls(posters) {
        const baseUrl = Configuration['images']['secure_base_url'];
        const posterSize = Configuration['images']['poster_sizes'][0];
        
        const images = posters.map((image) => {
            return `${baseUrl}${posterSize}${image['file_path']}`;
        });

        this.setState({
            images
        });
    }

    /**
     * Forms video urls
     */
    formVideoUrls(videos) {
        const filteredVideos = videos.filter((video) => video.site === 'YouTube');
        const videoUrls = filteredVideos.map((video) => {
            return {
                name: video.name, 
                url: `https://www.youtube.com/watch?v=${video.key}`
            };
        });
        this.setState({
            videos: videoUrls
        });

        console.log(this.state.videos);
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
            <View style={{
                flex: 1
            }}>
                <BackgroundImage uri={bgImage}/>
                <ScrollView>
                    <View style={style.detailsContainer}>
                        <Text style={[style.text, style.titleText]}>
                            {this.state.movieData.title}
                        </Text>

                        <MovieInfo
                            releaseDate={this.state.movieData.release_date}
                            runtime={this.state.movieData.runtime}
                            ratings={this.state.movieData.vote_average}/>

                        <Text style={[style.text, style.normalText]}>
                            {this.state.movieData.overview}
                        </Text>

                        <Text style={[style.text, style.headingText]}>Photos</Text>
                        <ImageList images={this.state.images} />

                        <Text style={[style.text, style.headingText]}>Trailer</Text>

                        <Text style={[style.text, style.normalText]}>
                            {this.state.videos.name}
                            {this.state.videos.url}
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
