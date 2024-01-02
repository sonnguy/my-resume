import { notify } from "@/services/toast.service";
import axios, { AxiosRequestConfig, AxiosResponse } from "axios";

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
});

api.interceptors.request.use((config) => {
  return config;
});

api.interceptors.response.use(
  function (response) {
    return response.data;
  },
  function (error) {
    notify("error", error.response?.data || "Something went wrong");
    return Promise.reject(error.response);
  }
);

export default api;
