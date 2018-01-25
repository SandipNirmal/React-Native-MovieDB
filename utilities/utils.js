import {Configuration} from '../data/configuration';

export const getUriPopulated = (shows, config, key) => {
  const {image} = config
  // decipher imageType from key
  const imageType = key.substring(0, key.indexOf('S'))

  return shows.map((show) => {
    const path = show[`${imageType}_path`];
    show['uri'] = `${image.secureBaseUrl}${image[key]}${path}`;
    return show
  });
}

 
export const getUriPopulatedTemp = (shows, imageType="poster") => {
  const secureUrl = Configuration['images']['secure_base_url'];
  const size = Configuration['images'][`${imageType}_sizes`][0];

  return shows.map((show) => {
    const path = show['file_path'] || show[`${imageType}_path`];
    show['uri'] = `${secureUrl}${size}${path}`;
      return show;
  })
}
