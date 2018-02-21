export const populateCastDetails = (newState, action) => {
  // We can choose to cache the movies. is that necessary?
  if (action.category === 'bio') {
    newState.cast.details = Object.assign({}, newState.cast.details, action.details)
  } else if (action.category === 'movies') {
    newState.cast.details['movies'] = action.details
  }
  return newState
}

export const populateDetails = (newState, action) => {
  if (action.category === 'imagesAndVideos') {
    newState.details = Object.assign({}, newState.details, action.details)
  } else if (action.category === 'directorsAndCast') {
    newState.details['directors'] = action.details['directors']
    newState.details['casts'] = action.details['casts']
  }
  return newState
}
