import {Configuration} from '../data/configuration';

export const getUriPopulated = (shows, imageType="poster") => {
  const secureUrl = Configuration['images']['secure_base_url'];
  const size = Configuration['images'][`${imageType}_sizes`][0];

  return shows.map((show) => {
    const path = show[`${imageType}_path`];
    show['uri'] = `${secureUrl}${size}${path}`;
    return show
  });
}

