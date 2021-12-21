import axios from "axios";

const request = axios.create({
  baseURL: process.env.VUE_APP_BASE_URL,
});
request.interceptors.request.use(
  (request) => {
    return request;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default request;
