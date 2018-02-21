import {FETCH_CAST_DETAILS} from '../Actions'

export default function CastReducer (state = {}, action) {
  switch (action.type) {
    case FETCH_CAST_DETAILS:
      return action.payload.data

    default:
      return state
  }
}
