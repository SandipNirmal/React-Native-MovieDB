import { getSeasonDetails } from './../services/seasons'

// SEASONS
export const FETCH_SEASON_DETAILS = 'FETCH_SEASON_DETAILS'

export const fetchSeasonDetails = (showId, season_number, success, err) => {
  const request = getSeasonDetails(showId, season_number)

  return { type: FETCH_SEASON_DETAILS, payload: request }
}
