import axios from "axios";

export const kinopoiskdevClient = axios.create({
  baseURL: import.meta.env.VITE_KINOPOISKDEV_API_URL,
  paramsSerializer: { indexes: null }
});

kinopoiskdevClient.interceptors.request.use((config) => {
  config.headers["X-API-KEY"] = import.meta.env.VITE_KINOPOISKDEV_API_KEY;
  return config;
});