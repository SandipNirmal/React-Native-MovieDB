import * as axios from 'axios';

import Constant from './../utilities/constants';

axios.defaults.baseURL = Constant.api_base_url;;
axios.defaults.headers.post['Content-Type'] = 'application/json';

// Axios interceptor for handling common HTTP errors
// Need to use it with reducers
axios.interceptors.response.use(res => res, err => Promise.reject(error));

/**
 * HTTP request to search item in The MovieDB
 * 
 * @returns {object | Promise}
 */
const getConfiguration = () => {
  return axios.get(`/configuration?${Constant.api_key}`)
}

export { getConfiguration }
