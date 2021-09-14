const API_ROOT = "http://codeial.codingninjas.com:8000/api/v2/";

export const Urls = {
  fetchPosts: (page, limit) => `${API_ROOT}posts?page=${page}&limt=${limit}`,
  login: () => `${API_ROOT}/users/login`,
  signup: () => `${API_ROOT}/users/signup`,
};
