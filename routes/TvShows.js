// To add TvShows. Think if this is really required? we can have this for
// readability purpose
import React from 'react';
import {StackNavigator} from 'react-navigation';

import TvShow from '../components/tv/TvShows';
import TvShowDetails from '../components/tv/TvShowDetails';
import CastDetails from '../components/common/CastDetails';
import AllTvShows from '../components/tv/AllTvShows';
import SeasonDetails from '../components/tv/SeasonDetails';
import ShareButton from './../components/common/ShareButton';

import {StackNavHeaderStyles} from '../styles/styles';

// TODO: Fix the shareButton name and id
const TvShowStack = StackNavigator({
  TvShow: {
    screen: TvShow,
    navigationOptions: {
      title: 'TvShows',
      ...StackNavHeaderStyles
    }
  },
  AllTvShows: {
    screen: AllTvShows,
    navigationOptions: ({navigation}) => ({
      title: navigation.state.params.category,
      ...StackNavHeaderStyles
    })
  },
  TvShowDetails: {
    screen: TvShowDetails,
    navigationOptions: ({
      navigation: {
        state: {
          params
        }
      }
    }) => ({
      title: params.name,
      ...StackNavHeaderStyles,
      headerRight: <ShareButton name={params.name} type="tv" id={params.id}/>
    })
  },
  CastDetails: {
    screen: CastDetails,
    navigationOptions: ({
      navigation: {
        state: {
          params
        }
      }
    }) => ({
      title: params.name,
      ...StackNavHeaderStyles,
      headerRight: <ShareButton name={params.name} type="person" id={params.id}/>
    })
  },
  SeasonDetails: {
    screen: SeasonDetails,
    navigationOptions: ({navigation}) => ({
      title: navigation.state.params.title,
      ...StackNavHeaderStyles
    })
  }
}, {
  headerMode: 'float',
  cardStyle: {
    backgroundColor: '#4C4C4C'
  }
});

export default TvShowStack;
