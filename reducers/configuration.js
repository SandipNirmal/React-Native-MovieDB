import initialState from '../State';
import * as _ from 'lodash';
import * as A from '../Actions';
import {Dimensions} from 'react-native';

function configuration(state=initialState['config'], action) {
  let newState = JSON.parse(JSON.stringify(state));
  const {width, height} = Dimensions.get('window');
  if(action.type === A.CONFIG_FETCHED) {
    const images = action.config.images;
    newState.image.secureBaseUrl = images.secure_base_url;
    // TODO add more conditions here. Refer
    // http://mediag.com/news/popular-screen-resolutions-designing-for-all/ or
    // similar documentation.
    // TODO Details page should make use of these values.
    if(_.inRange(width, 300, 600)) {
      newState.image.backdropSize = images.backdrop_sizes[1];
      newState.image.posterSizeForImageList = images.poster_sizes[1];
      newState.image.posterSizeForBackground = images.poster_sizes[5];
      newState.image.profileSize = images.profile_sizes[1];
      newState.image.stillSize = images.still_sizes[1];
    }
    return newState;
  }

  return state;
}

export default configuration;
