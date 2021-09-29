import {
  LOGIN_START,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  SIGNUP_START,
  SIGNUP_FAILURE,
  SIGNUP_SUCCESS,
  AUTHENTICATE_USER,
  LOGOUT,
  EDIT_USER_SUCCESSFUL,
  EDIT_USER_FAILED,
  CLEAR_AUTH_STATE,
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
    case SIGNUP_START:
      return {
        ...state,
        inProgress: true,
      };
    case LOGIN_SUCCESS:
    case SIGNUP_SUCCESS:
      return {
        isLoggedIn: true,
        inProgress: false,
        error: null,
        users: action.user,
      };
    case LOGIN_FAILURE:
    case SIGNUP_FAILURE:
      return {
        isLoggedIn: false,
        inProgress: false,
        error: action.error,
        users: { ...state.users },
      };
    case AUTHENTICATE_USER:
      return {
        inProgress: false,
        error: null,
        isLoggedIn: true,
        users: action.user,
      };
    case LOGOUT:
      return {
        inProgress: false,
        isLoggedIn: false,
        error: null,
        users: {},
      };
    case CLEAR_AUTH_STATE:
      return {
        ...state,
        error: null,
      };
    case EDIT_USER_SUCCESSFUL:
      return {
        ...state,
        user: action.user,
        error: false,
      };
    case EDIT_USER_FAILED:
      return {
        ...state,
        error: action.error,
      };
    default:
      return state;
  }
}
