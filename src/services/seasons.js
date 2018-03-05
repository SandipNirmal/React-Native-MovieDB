import axios from 'axios';

import * as index from './index';
import Constant from './../utilities/constants';

const apiKey = Constant.api_key

/**
 * HTTP request to get season details
 * 
 * @param {number} tvShowId
 * @param {number} season_number
 * @returns {object|promise}
 */
const getSeasonDetails = (tvShowId, season_number) => {
  const seasonAPI = `/tv/${tvShowId}/season/${season_number}`
  const seasonUrl = `${seasonAPI}?${apiKey}`

  return axios.get(seasonUrl);
}

export {
  getSeasonDetails
}
