import { FETCH_FRIENDS_SUCCESS } from "../actions/actionTypes";

const initialState = [];

export default function friends(state = initialState, action) {
  switch (action.type) {
    case FETCH_FRIENDS_SUCCESS:
      return {
        friends: action.friends,
      };
    default:
      return state;
  }
}
