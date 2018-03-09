import axios from 'axios';

import * as index from './index';
import Constant from './../utilities/constants';

const apiKey = Constant.api_key;

/**
 * HTTP request to get cast details
 * 
 * @param {number} castId
 * @returns {object | promise}
 */
const getCastDetails = (castId) => {
  return axios.get(`/person/${castId}?${apiKey}`)
}

export {
  getCastDetails
}
