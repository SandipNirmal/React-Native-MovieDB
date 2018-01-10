import React, {Component} from 'react';
import {View, Text, StyleSheet, ScrollView, ActivityIndicator} from 'react-native';
import {Avatar, Tile} from 'react-native-elements';

import BackgroundImage from './BackgroundImage';
import MovieInfo from './MovieInfo';
import ImageList from './ImageList';
import CastList from './CastList'

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
            videos: [],
            directors: [],
            casts: []
        };
    }

    componentDidMount() {
        fetch('https://api.themoviedb.org/3/movie/550?api_key=b8a04ea374eece868a6690782c9e7536&' +
                'append_to_response=videos,images').then((response) => response.json()).then((response) => {
            this.setState({isLoading: false, movieData: response});

            this.formImageUrls(response.images.posters);
            this.formVideoUrls(response.videos.results);
        }).catch((error) => {
            console.error(error);
        });

        fetch('https://api.themoviedb.org/3/movie/550/credits?api_key=b8a04ea374eece868a6690782c9e7536')
            .then((response) => response.json())
            .then((response) => {
                this.extractDirectors(response.crew);
                this.extractCast(response.cast);
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

        this.setState({images});
    }

    /**
     * Forms video urls
     */
    formVideoUrls(videos) {
        const filteredVideos = videos.filter((video) => video.site === 'YouTube');
        const videoUrls = filteredVideos.map((video) => {
            return {name: video.name, url: `https://www.youtube.com/watch?v=${video.key}`};
        });
        this.setState({videos: videoUrls});
    }

    /**
     * Extracts director from crew list and form his/her avatar url. It will
     * also slice 5 directors if list is too long 
     * @param {array} crew
     */
    extractDirectors(crew) {
        const baseUrl = Configuration['images']['secure_base_url'];
        const posterSize = Configuration['images']['profile_sizes'][0];

        const directors = crew
        .filter((member) => member.job === 'Director')
        .slice(0,5)
        .map((director) => {
            director.imageSrc = `${baseUrl}${posterSize}${director['profile_path']}`;
            return director;
        });

        this.setState({
            directors
        });
    }

    /**
     * Extracts cast in order of their orderId and form image url
     * 
     * @param {array} cast
     */
    extractCast(cast) {
        const baseUrl = Configuration['images']['secure_base_url'];
        const posterSize = Configuration['images']['profile_sizes'][0];

        const casts =  cast
        .sort((a, b) => a.order - b.order)
        .map((item) => {
            item.imageSrc = `${baseUrl}${posterSize}${item['profile_path']}`;
            return item;
        });

        this.setState({
            casts
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

                        <ImageList images={this.state.images}/>

                        <Text style={[style.text, style.headingText]}>Trailer</Text>

                        <Text style={[style.text, style.normalText]}>
                            {this.state.videos.name}
                            {this.state.videos.url}
                        </Text>

                        <CastList title="Director" items={this.state.directors}/>
                        <CastList title="Cast" items={this.state.casts}/>
                    </View>
                </ScrollView>
            </View>
        );
    }
}
