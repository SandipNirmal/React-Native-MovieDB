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

