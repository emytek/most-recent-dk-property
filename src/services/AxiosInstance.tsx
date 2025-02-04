import axios, { AxiosResponse, CreateAxiosDefaults } from "axios";
import { getUserToken } from "../utils/GetUserDetails";
import { message } from "antd";
import { ERROR } from "../data/data";

const config: CreateAxiosDefaults = {
  baseURL: import.meta.env.VITE_APP_BASE_URL,
};

const axiosInstance = axios.create(config);

axiosInstance.interceptors.request.use(
  (request) => {
    const token = getUserToken();
    if (token) {
      request.headers.apiKey = token;
      return request;
    }
    return request;
  },
  (error) => Promise.reject(error)
);

axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    const response = error?.response as AxiosResponse;
    if (response?.status === 500) {
      const errmessage = "Something went wrong, please try again";
      message.error(errmessage);
      return Promise.reject(error);
    }

    if (response?.status === 401) {
      const errmessage = "You're unauthorized, kindly login again.";
      window.location.href = "/";
      message.error(errmessage);
      return Promise.reject(error);
    }

    if (response?.data?.responseDto?.code === ERROR) {
      const errmessage = response?.data?.responseDto?.message;
      message.error(errmessage);
      return Promise.reject(error);
    }

    return Promise.reject(error);
  }
);

export default axiosInstance;
