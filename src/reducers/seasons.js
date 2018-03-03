import {FETCH_SEASON_DETAILS} from "../Actions";

export default function SeasonReducer(state = [], action) {
  switch (action.type) {
    case FETCH_SEASON_DETAILS:
      return action.payload.data;

    default:
      return state;
  }
}