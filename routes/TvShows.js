// To add TvShows. Think if this is really required?
// we can have this for readability purpose
import {StackNavigator} from 'react-navigation';
import TvShow from '../components/TvShows';
import TvShowDetails from '../components/TvShowDetails';
import TvShowSeasons from '../components/TvShowSeasons';
import CastDetails from '../components/CastDetails';

const TvShowStack = StackNavigator({
    TvShow: {
      screen: TvShow
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
