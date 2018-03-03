export const getUriPopulated = (shows, config, key) => {
  const {image} = config
  // decipher imageType from key
  // ex: posterSizeForImageList, extract poster from string
  const imageType = key.substring(0, key.indexOf('S'))

  return shows.map((show) => {
    const path = show['file_path'] || show[`${imageType}_path`]
    show['uri'] = `${image.secureBaseUrl}${image[key]}${path}`
    return show
  })
}

String.prototype.toCategory = function () {
  return this.replace(/ /g, '').replace(/(.)/, c => c.toLowerCase())
}

String.prototype.toUnderScore = function () {
  return this.replace(/([A-Z])/g, '_$1')
}
