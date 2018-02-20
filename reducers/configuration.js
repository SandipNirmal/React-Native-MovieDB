import initialState from '../State';
import * as _ from 'lodash';
import * as A from '../Actions';
import {Dimensions} from 'react-native';

const margin = 5;
const aspectRatioForPosters = 1.5;
const aspectRatioForBackdrops = 0.6;

function configuration(state=initialState['config'], action) {
  let newState = JSON.parse(JSON.stringify(state));
  const {width, height} = Dimensions.get('window');
  if(action.type === A.CONFIG_FETCHED) {
    const images = action.config.images;
    newState.image.secureBaseUrl = images.secure_base_url;
    // TODO add more conditions here. Refer
    // http://mediag.com/news/popular-screen-resolutions-designing-for-all/ or
    // similar documentation.
    newState.image.backdropSize = images.backdrop_sizes[2];
    newState.image.posterSizeForImageList = images.poster_sizes[2];
    newState.image.posterSizeForBackground = images.poster_sizes[5];
    newState.image.profileSize = images.profile_sizes[2];
    newState.image.stillSize = images.still_sizes[2];
    if (_.inRange(width, 300, 600)) {
      numColumns = 3;
      newState.image.numColumns = numColumns;
      itemWidth = (width - ((numColumns - 1) * margin)) / numColumns; 

      newState.style.posterSize = {
        margin: margin,
        width: itemWidth,
        height: itemWidth * aspectRatioForPosters,
      }

      screenProportion = 0.8;
      itemWidth = width * screenProportion;
      newState.style.backdropSize = {
        margin: margin,
        width: itemWidth,
        height: itemWidth * aspectRatioForBackdrops,
      }
    }
    return newState;
  }

  return state;
}

export default configuration;
