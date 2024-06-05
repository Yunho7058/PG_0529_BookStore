import axios, { AxiosRequestConfig } from 'axios';

const BASE_URL = 'http://localhost:9999';
const DEAFAULT_TIMOUT = 30000;

export const creaClient = (config?: AxiosRequestConfig) => {
  const axiosInstance = axios.create({
    baseURL: BASE_URL,
    timeout: DEAFAULT_TIMOUT,
    headers: {
      'Content-Type': 'application/json',
    },
    withCredentials: true,
    ...config,
  });
  //err 상황
  axiosInstance.interceptors.response.use(
    (response) => {
      return response;
    },
    (err) => {
      return Promise.reject(err);
    }
  );

  return axiosInstance;
};
export const httpsClient = creaClient();
