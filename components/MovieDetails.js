import React, {Component} from 'react';
import Details from './Details';
import Constant from '../utilities/constants';

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

    this.fetchDetails(movieUrl);
    this.fetchPeople(movieCreditsUrl);
  }
}

export default MovieDetails;
