import React, { Component } from 'react';
import {
  ActivityIndicator,
  Text,
  View,
} from 'react-native';
import * as _ from 'lodash';
import { connect } from 'react-redux';
import { configFetched, movieFetched } from '../Actions';
import { Avatar } from 'react-native-elements';
import { getUriPopulated } from '../utilities/utils';
import Constant from '../utilities/constants';

import style, { primaryColor } from '../styles/styles';


class SplashScreen extends Component {
  componentDidMount() {
    const apiKey = Constant.api_key;
    let uri = `${Constant.api_base_url}/configuration?${apiKey}`
    const { onFetchCompleted, onConfigFetched, config, settings } = this.props;

    fetch(uri).then((response) => response.json()).then((response) => {
      onConfigFetched(response);
      uri = `${Constant.api_base_url}/movie/now_playing?${apiKey}&language=${settings.language}&page=1`;
      fetch(uri).then((response) => response.json()).then((response) => {
        if (_.get(this, 'props.navigation.navigate')) {
          onFetchCompleted('nowShowing',
            getUriPopulated(response.results, config, 'posterSizeForImageList'));
          this.props.navigation.navigate('MainScreen');
        }
      }).catch(error => console.error(error))
    }).catch(error => console.error(error))
  }

  render() {
    return(
      <View style={[style.centerContentContainer, style.screenBackgroundColor]}>
      <Avatar
          xlarge
          rounded
          containerStyle={{backgroundColor: primaryColor}}
          title="L"
          titleStyle={{fontWeight: '900', fontSize: 100}}
        />
        <Text style={[style.appName, style.startupScreenTextProps]}>
          LaLune
        </Text>
        <View style={{marginTop: 50, marginBottom: 50}}>
          <ActivityIndicator
            size="large"
            color={primaryColor}
          />
        </View>
        <Text style={[style.titleText, style.startupScreenTextProps]}>
          For everyone in love with movies and TV Shows
        </Text>
      </View>
    )
  }
};

const mapStateToProps = state => ({
  isFetching: state.movies.isFetching,
  config: state.configuration,
  settings: state.settings,
});

const mapDispatchToProps = dispatch => ({
  onFetchCompleted: (category, movies) => {
    dispatch(movieFetched(category, movies));
  },
  onConfigFetched: config => {
    dispatch(configFetched(config));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(SplashScreen);
