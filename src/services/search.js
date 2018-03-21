import axios from 'axios';

import * as index from './index';
import Constant from './../utilities/constants';

const searchUrl = '/search/multi';


/**
 * HTTP request to search item in The MovieDB
 * 
 * @param {string} searchQuery
 * @param {string} language
 * @param {string} region
 * @returns {object | Promise}
 */
const searchItem = (searchQuery, language, region) => {
  const attributes = `&language=${language}&region=${region}&page=1&query=${encodeURIComponent(searchQuery)}`
  return axios.get(`${searchUrl}?${Constant.api_key}${attributes}`)
}

export {
  searchItem
}
