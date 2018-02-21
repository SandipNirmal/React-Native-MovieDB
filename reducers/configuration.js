import {Dimensions} from 'react-native'

import initialState from '../State'
import * as _ from 'lodash'
import * as A from '../Actions'

const margin = 5

const getCarouselStyle = (width, height) => {
  // landscape orientation or portrait
  let aspectRatioForCarousel = (width > height) ? 0.45 : 0.55

  return {
    flexGrow: 1,
    height: width * aspectRatioForCarousel,
    width: width
  }
}

const getPosterSizeStyle = (width, numColumns) => {
  const aspectRatioForPosters = 1.5
  const posterWidth = (width - ((numColumns - 1) * margin)) / numColumns

  return {
    margin: margin,
    width: posterWidth,
    height: posterWidth * aspectRatioForPosters
  }
}

const getBackdropSizeStyle = (width) => {
  const aspectRatioForBackdrops = 0.6
  const screenImageRatio = 0.8
  const backdropWidth = width * screenImageRatio

  return {
    margin: margin,
    width: backdropWidth,
    height: backdropWidth * aspectRatioForBackdrops
  }
}

const populateStylesAndCol = (newState) => {
  const {width, height} = Dimensions.get('window')
  let numColumns = 3 // default

  if (_.inRange(width, 300, 500)) {
    numColumns = 3
  } else if (_.inRange(width, 500, 700)) {
    numColumns = 4
  } else {
    numColumns = 5
  }

  newState.image.numColumns = numColumns
  newState.style.posterSize = getPosterSizeStyle(width, numColumns)
  newState.style.backdropSize = getBackdropSizeStyle(width)
  newState.style.carousel = getCarouselStyle(width, height)
}

function configuration (state = initialState['config'], action) {
  let newState = JSON.parse(JSON.stringify(state))
  if (action.type === A.CONFIG_FETCHED) {
    const images = action.config.images
    newState.image.secureBaseUrl = images.secure_base_url
    // TODO add more conditions here. Refer
    // http://mediag.com/news/popular-screen-resolutions-designing-for-all/ or
    // similar documentation.
    newState.image.backdropSize = images.backdrop_sizes[2]
    newState.image.posterSizeForImageList = images.poster_sizes[2]
    newState.image.posterSizeForBackground = images.poster_sizes[5]
    newState.image.profileSize = images.profile_sizes[2]
    newState.image.stillSize = images.still_sizes[2]

    populateStylesAndCol(newState)
    return newState
  } else if (action.type == A.LAYOUT_CHANGED) {
    populateStylesAndCol(newState)
    return newState
  }

  return state
}

export default configuration
