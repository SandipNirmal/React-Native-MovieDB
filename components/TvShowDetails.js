import React, {Component} from 'react';
import Details from './Details';
import Constant from '../utilities/constants';
import HorizontalImageList from './common/ImageList';
import style from '../styles/styles';
import * as _ from 'lodash';
import { getUriPopulatedTemp } from '../utilities/utils';

class TvShowDetails extends Details {
  componentDidMount() {
    const baseUrl = Constant.api_base_url;
    const apiKey = Constant.api_key;
    const tvShow_url = '/tv/'; 
    const appendResponse = "append_to_response=videos,images"
    // TODO: use lodash here + add error handling
    const tvShowId = this.props.navigation.state.params.item.id;

    const tvShowUrl = `${baseUrl}${tvShow_url}${tvShowId}?${apiKey}&${appendResponse}`;
    const tvShowCreditsUrl = `${baseUrl}${tvShow_url}${tvShowId}/credits?${apiKey}`;

    this.fetchDetails(tvShowUrl, tvShowCreditsUrl);
  }

  showSeasonDetails(season) {
    this.props.navigation.navigate('SeasonDetails', {season: season});
  }

  getSpecialComponent() {
    const seasons = _.get(this, 'state.data.seasons', []);
    
    return <HorizontalImageList
            isTouchableImage
            title="Seasons"
            style={style.posterSize}
            onPress={this.showSeasonDetails.bind(this)}
            images={getUriPopulatedTemp(seasons)}
          />
  }
}


export default TvShowDetails;
