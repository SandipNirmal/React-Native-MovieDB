import React, {Component} from 'react';
import Details from './Details';
import Constant from '../utilities/constants';

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

    this.fetchDetails(tvShowUrl);
    this.fetchPeople(tvShowCreditsUrl);
  }
}

export default TvShowDetails;
