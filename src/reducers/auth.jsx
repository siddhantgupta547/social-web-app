import {
  LOGIN_START,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
} from "../actions/actionTypes";

const initialState = {
  inProgress: false,
  isLoggedIn: false,
  error: null,
  users: {},
};

export default function auth(state = initialState, action) {
  switch (action.type) {
    case LOGIN_START:
      return {
        ...state,
        inProgress: true,
      };
    case LOGIN_SUCCESS:
      return {
        isLoggedIn: true,
        inProgress: false,
        error: null,
        users: action.user,
      };
    case LOGIN_FAILURE:
      return {
        isLoggedIn: true,
        inProgress: false,
        error: action.error,
        user: { ...state.users },
      };
    default:
      return state;
  }
}
