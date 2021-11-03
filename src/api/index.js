import * as axios from "axios";

const token = localStorage.getItem("jwt");
const referrer_url = document.referrer;

const instance = axios.create({
  baseURL: process.env.REACT_APP_SERVER_API_URL,
  withCredentials: true,
  xsrfHeaderName: "X-CSRFToken",
  headers: {
    Authorization: `Bearer ${token}`,
    Referrer: referrer_url,
  },
});

export default instance;

export const setAuthToken = (authToken, api) => {
  api.defaults.headers["Authorization"] = `Bearer ${authToken}`;
};
