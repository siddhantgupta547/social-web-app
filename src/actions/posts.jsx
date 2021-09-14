import { UPDATE_POSTS } from "./actionTypes";
import { Urls } from "../helpers/urls";

export function fetchPosts() {
  const url = Urls.fetchPosts(1, 5);
  return function (dispatch) {
    fetch(url)
      .then((response) => response.json())
      .then((response) => {
        dispatch(updatePosts(response.data.posts.slice(1, 6)));
      });
  };
}

export function updatePosts(posts) {
  return {
    type: UPDATE_POSTS,
    posts,
  };
}
