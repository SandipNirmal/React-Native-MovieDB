import React, {Component} from 'react';
import Details from '../base/Details';
import Constant from '../../utilities/constants';
import CastList from '../common/CastList'
import { connect } from 'react-redux';
import { searchItemDetailsFetched, movieDetailsFetched } from '../../Actions';

class MovieDetails extends Details {
  componentDidMount() {
    const baseUrl = Constant.api_base_url;
    const apiKey = Constant.api_key;
    const movie_url = '/movie/'; 
    const appendResponse = "append_to_response=videos,images"
    const movieId = this.props.details.id;

    const movieUrl = `${baseUrl}${movie_url}${movieId}?${apiKey}&${appendResponse}`;
    const movieCreditsUrl = `${baseUrl}${movie_url}${movieId}/credits?${apiKey}`;

    this.fetchDetails(movieUrl, movieCreditsUrl);
  }

  getSpecialComponent() {
    return <CastList 
              title="Director"
              items={this.props.details.directors || []}
              onPress={this.showCastDetails.bind(this)}
            />
  }
}

const mapStateToProps = ({tabNavHelper, search, movies}) => ({
  details: tabNavHelper.currentTab === 'Search' ? search.details : movies.details,
  currentTab: tabNavHelper.currentTab,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  onDetailsFetched: (details, category, currentTab) => {
    if (currentTab === 'Search') {
      dispatch(searchItemDetailsFetched(details, category))
    } else {
      dispatch(movieDetailsFetched(details, category))
    }
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(MovieDetails);
