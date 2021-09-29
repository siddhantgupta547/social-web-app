import {
  LOGIN_START,
  LOGIN_FAILURE,
  LOGIN_SUCCESS,
  SIGNUP_START,
  SIGNUP_SUCCESS,
  SIGNUP_FAILURE,
  AUTHENTICATE_USER,
  LOGOUT,
  CLEAR_AUTH_STATE,
  EDIT_USER_SUCCESSFUL,
  EDIT_USER_FAILED,
} from "./actionTypes";
import { getAuthTokenFromLocalStorage } from "../helpers/utils";
import { Urls } from "../helpers/urls";

export function startLogin() {
  return {
    type: LOGIN_START,
  };
}

export function login(email, password) {
  return function (dispatch) {
    dispatch(startLogin());
    const url = Urls.login();
    // fetch(url, {
    //   method: "POST",
    //   header: {
    //     "Content-Type": "application/x-www-form-urlencoded",
    //   },
    //   body: getFormBody({ email, password }),
    // })
    fetch(url, {
      method: "POST",
      body: new URLSearchParams({
        email,
        password,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        if (data.success) {
          localStorage.setItem("token", data.data.token);
          dispatch(loginSuccess(data));
        } else {
          dispatch(loginFailure(data.message));
        }
      });
  };
}

export function loginSuccess(user) {
  return {
    type: LOGIN_SUCCESS,
    user,
  };
}

export function loginFailure(error) {
  return {
    type: LOGIN_FAILURE,
    error,
  };
}

export function startSignup() {
  return {
    type: SIGNUP_START,
  };
}

export function signup(email, password, confirmPassword, name) {
  return function (dispatch) {
    //dispatch(startSignup());
    const url = Urls.signup();
    // fetch(url, {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/x-www-form-urlencoded",
    //   },
    //   body: getFormBody({
    //     email,
    //     password,
    //     confirm_password: confirmPassword,
    //     name,
    //   }),
    // })
    fetch(url, {
      method: "POST",
      body: new URLSearchParams({
        email,
        name,
        password,
        confirm_password: confirmPassword,
      }),
    })
      .then((response) => {
        console.log(response);
        return response.json();
      })
      .then((data) => {
        console.log(data);
        // if (data.success) {
        //   // dispatch(signupSuccess());
        //   localStorage.setItem("token", data.data.token);
        //   dispatch(signupSuccess(data.data.user));
        // } else {
        //   dispatch(signupFailure(data.message));
        // }
      });
  };
}

export function signupSuccess(user) {
  return {
    type: SIGNUP_SUCCESS,
    user,
  };
}

export function signupFailure(error) {
  return {
    type: SIGNUP_FAILURE,
    error,
  };
}

export function authenticateUser(user) {
  return {
    type: AUTHENTICATE_USER,
    user,
  };
}

export function logout() {
  return {
    type: LOGOUT,
  };
}

export function clearAuthState() {
  return {
    type: CLEAR_AUTH_STATE,
  };
}

export function editUserSuccessful(user) {
  return {
    type: EDIT_USER_SUCCESSFUL,
    user,
  };
}

export function editUserFailed(error) {
  return {
    type: EDIT_USER_FAILED,
    error,
  };
}

export function editUser(name, password, confirmPassword, userId) {
  return (dispatch) => {
    const url = Urls.editProfile();

    // fetch(url, {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/x-www-form-urlencoded",
    //     Authorization: `Bearer ${getAuthTokenFromLocalStorage()}`,
    //   },
    //   body: getFormBody({
    //     name,
    //     password,
    //     confirm_password: confirmPassword,
    //     id: userId,
    //   }),
    // })
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization: `Bearer ${getAuthTokenFromLocalStorage()}`,
      },
      body: new URLSearchParams({
        name,
        password,
        confirm_password: confirmPassword,
        id: userId,
      }),
    })
      .then((repsonse) => repsonse.json())
      .then((data) => {
        console.log("EDIT PROFIle data", data);
        if (data.success) {
          dispatch(editUserSuccessful(data.data.user));

          if (data.data.token) {
            localStorage.setItem("token", data.data.token);
          }
          return;
        }

        dispatch(editUserFailed(data.message));
      });
  };
}
