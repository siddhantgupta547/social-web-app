import { Urls } from "../helpers/urls";
import { FETCH_FRIENDS_SUCCESS } from "./actionTypes";
import { getAuthTokenFromLocalStorage } from "../helpers/utils";

export function fetchFriends() {
  return function (dispatch) {
    const url = Urls.fetchFriends();
    fetch(url, {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization: `Bearer ${getAuthTokenFromLocalStorage()}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          dispatch(fetchFriendsSuccess(data.data.friends));
        } else {
          console.error(data.data.message);
        }
      });
  };
}

export function fetchFriendsSuccess(friends) {
  return {
    type: FETCH_FRIENDS_SUCCESS,
    friends,
  };
}
