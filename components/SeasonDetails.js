import React, { Component } from 'react';
import {View, Text, ScrollView } from 'react-native';

import BackgroundImage from './BackgroundImage';
import ShowOverview from './common/ShowOverview';
import EpisodeList from './EpisodeList';

import { Configuration } from '../data/configuration';
import style from './../styles/styles';

class SeasonDetails extends Component {

  render() {
    const { poster_path, air_date, episode_count, season_number } = this.props.navigation.state.params.season;
    
    const baseUrl = Configuration['images']['secure_base_url'];
    const size = Configuration['images']['poster_sizes'][5]
    const bgImage = `${baseUrl}${size}/${poster_path}`;
    
    return (
      <View style={[{ flex: 1 }, style.screenBackgroundColor]}>
        <BackgroundImage uri={bgImage}/>
        <ScrollView>
          <View style={style.detailsContainer}>
            <Text style={[style.text, style.titleText]}>
                Season {season_number}
            </Text>
            <ShowOverview
                date={air_date}
                episodes={episode_count}
              />
          </View>

          <EpisodeList />
        </ScrollView>
      </View>
    );
  }
}

export default SeasonDetails;


