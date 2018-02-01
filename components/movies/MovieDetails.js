import React, {Component} from 'react';
import Details from '../base/Details';
import Constant from '../../utilities/constants';
import CastList from '../common/CastList'

class MovieDetails extends Details {
  componentDidMount() {
    const baseUrl = Constant.api_base_url;
    const apiKey = Constant.api_key;
    const movie_url = '/movie/'; 
    const appendResponse = "append_to_response=videos,images"
    // TODO: use lodash here + add error handling
    const movieId = this.props.navigation.state.params.item.id;

    const movieUrl = `${baseUrl}${movie_url}${movieId}?${apiKey}&${appendResponse}`;
    const movieCreditsUrl = `${baseUrl}${movie_url}${movieId}/credits?${apiKey}`;

    this.fetchDetails(movieUrl, movieCreditsUrl);
  }

  getSpecialComponent() {
    return <CastList 
              title="Director"
              items={this.state.directors}
              onPress={this.showCastDetails.bind(this)}
            />
  }
}

export default MovieDetails;
