import React, {Component} from 'react';
import Details from '../base/Details';
import Constant from '../../utilities/constants';
import HorizontalImageList from '../common/ImageList';
import style from '../../styles/styles';
import * as _ from 'lodash';
import { getUriPopulatedTemp } from '../../utilities/utils';
import { connect } from 'react-redux';
import { tvShowDetailsFetched } from '../../Actions';

class TvShowDetails extends Details {
  componentDidMount() {
    const baseUrl = Constant.api_base_url;
    const apiKey = Constant.api_key;
    const tvShow_url = '/tv/'; 
    const appendResponse = "append_to_response=videos,images"
    const tvShowId = this.props.details.id;

    const tvShowUrl = `${baseUrl}${tvShow_url}${tvShowId}?${apiKey}&${appendResponse}`;
    const tvShowCreditsUrl = `${baseUrl}${tvShow_url}${tvShowId}/credits?${apiKey}`;

    this.fetchDetails(tvShowUrl, tvShowCreditsUrl);
  }

  showSeasonDetails(season) {
    this.props.navigation.navigate('SeasonDetails', {season: season,
      title: this.props.details.name,
      tvShowId: this.props.details.id});
  }

  getSpecialComponent() {
    const seasons = _.get(this, 'props.details.seasons', []);
    
    return <HorizontalImageList
            isTouchableImage
            title="Seasons"
            style={style.posterSize}
            onPress={this.showSeasonDetails.bind(this)}
            images={getUriPopulatedTemp(seasons.sort((a, b) => b.season_number - a.season_number))}
          />
  }
}

const mapStateToProps = state => ({
  details: state.tvShows.details,
});

const mapDispatchToProps = dispatch => ({
  onDetailsFetched: (details, category) => {
    dispatch(tvShowDetailsFetched(details, category))
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(TvShowDetails);
