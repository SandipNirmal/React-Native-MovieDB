import React, {Component} from 'react';
import { 
  ActivityIndicator,
  Button,
  ScrollView, StyleSheet,
  Text,
  View,
} from 'react-native';
import {Avatar, Tile} from 'react-native-elements';
import {StackNavigator} from 'react-navigation';

import BackgroundImage from './BackgroundImage';
import MovieInfo from './MovieInfo';
import HorizontalImageList from './ImageList';
import CastList from './CastList'
import CastDetails from './CastDetails';

import {Configuration} from '../data/configuration';
import style from '../styles/styles';

class MovieDetails extends Component {
    // ideally the stack navigator should pick the headerBackTitle
    // as the title name. There seems to be a bug; used a work around
    // suggested in
    // https://github.com/react-navigation/react-navigation/issues/115
    static navigationOptions = ({navigation}) => ({
        title: navigation.state.params.movie.original_title,
        headerTitleStyle: style.headerTextColor,
        headerStyle: style.headerBackground,
        headerTintColor: style.headerTintColor,
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
        const baseUrl = "https://api.themoviedb.org/3/movie/";
        const apiKey = "api_key=b8a04ea374eece868a6690782c9e7536";
        const appendResponse = "append_to_response=videos,images"
        // TODO: use lodash here + add error handling
        const movieId = this.props.navigation.state.params.movie.id;
        let url = `${baseUrl}${movieId}?${apiKey}&${appendResponse}`;

        fetch(url).then((response) => response.json()).then((response) => {
            this.setState({isLoading: false, movieData: response});

            this.formImageUrls(response.images.backdrops);
            this.formVideoUrls(response.videos.results);
        }).catch((error) => {
            console.error(error);
        });
      
        url = `${baseUrl}${movieId}/credits?${apiKey}`;
        fetch(url)
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
        const posterSize = Configuration['images']['backdrop_sizes'][1];

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
        const posterSize = Configuration['images']['profile_sizes'][1];

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
        const posterSize = Configuration['images']['profile_sizes'][1];

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

    showCastDetails(cast) {
      this.props.navigation.navigate('CastDetails', {cast: cast});
    }

    render() {

        const baseUrl = Configuration['images']['secure_base_url'];
        const size = Configuration['images']['poster_sizes'][5]
        const bgImage = baseUrl + size + '/' + this.props.navigation.state.params.movie.poster_path;

        if (this.state.isLoading) {
            return (
                <View
                    style={[{
                    flex: 1,
                    paddingTop: 20
                }, style.screenBackgroundColor]}>
                    <ActivityIndicator/>
                </View>
            );
        }

        return (
            <View style={[{
                flex: 1
            }, style.screenBackgroundColor]}>
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

                        <HorizontalImageList
                          title="Photos"
                          images={this.state.images}
                          style={style.backdropSize}
                        />

                        <Text style={[style.text, style.headingText]}>Trailer</Text>

                        <Text style={[style.text, style.normalText]}>
                            {this.state.videos.name}
                            {this.state.videos.url}
                        </Text>

                        <CastList 
                          title="Director"
                          items={this.state.directors}
                          onPress={this.showCastDetails.bind(this)}
                        />
                        <CastList
                          title="Cast"
                          items={this.state.casts}
                          onPress={this.showCastDetails.bind(this)}
                        />
                    </View>
                </ScrollView>
            </View>
        );
    }
}

const MovieDetailsStack = StackNavigator({
    MovieDetailsStack: {
      screen: MovieDetails
    },
    CastDetails: {
      screen: CastDetails
    },
  },
  {
    headerMode: 'none',
  }
);

export default MovieDetailsStack;
