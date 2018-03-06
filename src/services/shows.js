import axios from 'axios';

import * as index from './index';
import Constant from './../utilities/constants';

const apiKey = Constant.api_key;
const appendResponse = 'append_to_response=videos,images';

/**
 * HTTP request to fetch shows specified by route argument
 * 
 * @param {string} route - url route for now showing movies
 * @param {string} lan - language
 * @param {string} reg - region
 * @returns {object | promise}
 */
const getShows = (route, lan, reg) => {
  const uri = `${route}?${apiKey}&language=${lan}&region=${reg}&page=1`
  return axios.get(uri);
}

/**
 * HTTP request to fetch show (movie  tvShow) details for passed value
 * 
 * @param {string} showUrl
 * @param {string} showId
 * 
 * @return {object | Promise}
 */
const getShowDetails = (showUrl, showId) => {
  return axios.get(`${showUrl}${showId}?${apiKey}&${appendResponse}`);
}

/**
 * HTTP request to fetch show cast and crew info
 * 
 * @param {string} showUrl
 * @param {string} showId
 * 
 * @return {object | Promise}
 */
const getShowCredits = (showUrl, showId) => {
  return axios.get(`${showUrl}${showId}/credits?${apiKey}`);
} 

export {
  getShows,
  getShowDetails,
  getShowCredits
}
