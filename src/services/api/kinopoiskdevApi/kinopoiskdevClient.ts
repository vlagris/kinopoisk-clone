import axios from "axios";
import {KINOPOISKDEV_API_KEY, KINOPOISKDEV_API_URL} from "@/constants";

export const kinopoiskdevClient = axios.create({
  baseURL: KINOPOISKDEV_API_URL,
});

kinopoiskdevClient.interceptors.request.use((config) => {
  config.headers["X-API-KEY"] = KINOPOISKDEV_API_KEY;
  return config;
});