import axios from 'axios';

import Constant from './../utilities/constants';

const baseUrl = Constant.api_base_url;
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
  const seasonUrl = `${baseUrl}${seasonAPI}?${apiKey}`

  return axios.get(seasonUrl);
}

export {
  getSeasonDetails
}
