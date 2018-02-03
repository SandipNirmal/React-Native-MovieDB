// To add TvShows. Think if this is really required?
// we can have this for readability purpose
import React from 'react';
import {StackNavigator} from 'react-navigation';

import TvShow from '../components/tv/TvShows';
import TvShowDetails from '../components/tv/TvShowDetails';
import CastDetails from '../components/common/CastDetails';
import AllTvShows from '../components/tv/AllTvShows';
import SeasonDetails from '../components/tv/SeasonDetails';
import ShareButton from './../components/common/shareButton';

import { StackNavHeaderStyles } from '../styles/styles';

const TvShowStack = StackNavigator({
    TvShow: {
      screen: TvShow,
      navigationOptions: {
        title: 'TvShows',
        ...StackNavHeaderStyles,
      },
    },
    AllTvShows: {
      screen: AllTvShows,
      navigationOptions: ({navigation}) => ({
        title: navigation.state.params.category,
        ...StackNavHeaderStyles,
      }),
    },
    TvShowDetails: {
      screen: TvShowDetails,
      navigationOptions: ({navigation}) => ({
        title: navigation.state.params.item.name,
        ...StackNavHeaderStyles,
        headerRight: <ShareButton 
                      name={navigation.state.params.item.name}
                      type="tv"
                      id={navigation.state.params.item.id}
                    />
      }),
    },
    CastDetails: {
      screen: CastDetails,
      navigationOptions: ({navigation}) => ({
        title: navigation.state.params.cast.name,
        ...StackNavHeaderStyles,
        headerRight: <ShareButton 
                      name={navigation.state.params.cast.name}
                      type="person"
                      id={navigation.state.params.cast.id}
                    />
      }),
    },
    SeasonDetails: {
      screen: SeasonDetails,
      navigationOptions: ({navigation}) => ({
        title: navigation.state.params.title,
        ...StackNavHeaderStyles,
      }),
    }
  },
  {
    headerMode: 'float',
    cardStyle: {
      backgroundColor: '#4C4C4C'
    }
  }
);

export default TvShowStack;
