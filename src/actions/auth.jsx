import { LOGIN_START, LOGIN_FAILURE, LOGIN_SUCCESS } from "./actionTypes";
import { getFormBody } from "../helpers/utils";
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
    fetch(url, {
      method: "POST",
      header: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: getFormBody({ email, password }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        if (data.success) {
          console.log("Success");
        } else {
          console.log(data.message);
        }
      });
  };
}
