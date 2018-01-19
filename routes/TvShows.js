// To add TvShows. Think if this is really required?
// we can have this for readability purpose
import {StackNavigator} from 'react-navigation';
import TvShow from '../components/TvShows';
import TvShowDetails from '../components/TvShowDetails';
import TvShowSeasons from '../components/TvShowSeasons';
import CastDetails from '../components/CastDetails';
import AllTvShows from '../components/AllTvShows';

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
      screen: TvShowDetails
    },
    TvShowSeasons: {
      screen: TvShowSeasons
    },
    CastDetails: {
      screen: CastDetails
    },
  },
  {
    headerMode: 'float',
    cardStyle: {
      backgroundColor: '#4C4C4C'
    }
  }
);

export default TvShowStack;
