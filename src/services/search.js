import axios from 'axios';

import * as index from './index';
import Constant from './../utilities/constants';

const { lan_region, api_key } = Constant;
const searchUrl = '/search/multi';


/**
 * HTTP request to search item in The MovieDB
 * 
 * @param {string} searchQuery
 * @returns {object | Promise}
 */
const searchItem = (searchQuery) => {
  return axios.get(`${searchUrl}?${api_key}${lan_region}&query=${encodeURIComponent(searchQuery)}`)
}

export {
  searchItem
}
