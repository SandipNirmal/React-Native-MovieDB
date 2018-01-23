import React, {Component} from 'react';
import {
    View,
    Text,
    StyleSheet,
    ScrollView
} from 'react-native';

import BackgroundImage from './BackgroundImage';
import MovieInfo from './MovieInfo';

import {Configuration} from '../data/configuration';
import Constant from './../utilities/constants';
import style from '../styles/styles';
  
export default class TvShowDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: this.props.navigation.state.params.tvShow
    };
  }

  render() {
    const baseUrl = Configuration['images']['secure_base_url'];
      const size = Configuration['images']['poster_sizes'][5]
      const bgImage = `${baseUrl}${size}/${this.props.navigation.state.params.tvShow.poster_path}`;

    return (
      <View style={[{
              flex: 1
          }, style.screenBackgroundColor]}>
              <BackgroundImage uri={bgImage}/>
              <ScrollView>
                  <View style={style.detailsContainer}>
                    <Text style={[style.text, style.titleText]}>
                        {this.state.data.name}
                    </Text>

                    <MovieInfo
                            releaseDate={this.state.data.first_air_date}
                            runtime={this.state.data.number_of_episodes || 100}
                            ratings={this.state.data.vote_average}/>

                      <Text style={[style.text, style.normalText]}>
                          {this.state.data.overview}
                      </Text>
                  </View>
              </ScrollView>          
        </View>
    );
  }
}
