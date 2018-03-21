import axios from 'axios';

import * as index from './index';
import Constant from './../utilities/constants';

const apiKey = Constant.api_key;

/**
 * HTTP request to fetch shows specified by route argument
 * 
 * @param {string} route - url route for now showing movies
 * @param {string} language
 * @param {string} region
 * @returns {object | promise}
 */
const getShows = (route, language, region) => {
  const uri = `${route}?${apiKey}&language=${language}&region=${region}&page=1`
  return axios.get(uri);
}

/**
 * HTTP request to fetch show (movie  tvShow) details for passed value
 * 
 * @param {string} route
 * @param {string} showId
 * 
 * @return {object | Promise}
 */
const getShowDetails = (route, showId) => {
  const appendResponse = 'append_to_response=videos,images';
  return axios.get(`${route}${showId}?${apiKey}&${appendResponse}`);
}

/**
 * HTTP request to fetch show cast and crew info
 * 
 * @param {string} route
 * @param {string} showId
 * 
 * @return {object | Promise}
 */
const getShowCredits = (route, showId) => {
  return axios.get(`${route}${showId}/credits?${apiKey}`);
} 

export {
  getShows,
  getShowDetails,
  getShowCredits
}
