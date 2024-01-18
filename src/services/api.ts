import axios, { AxiosRequestConfig, AxiosResponse } from "axios";

import { authRepository } from "../repositories/auth.repository";

export const API_BASE_URL = "http://localhost:3000";

const user = authRepository.getLoggedUser();

export const request = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    Accept: "application/json",
    Authorization: user ? `Bearer ${user?.access_token}` : null,
  },
});

export const get = (config: AxiosRequestConfig): Promise<AxiosResponse> =>
  request({ ...config, method: "GET" });

export const post = (config: AxiosRequestConfig): Promise<AxiosResponse> =>
  request({ ...config, method: "POST" });

export const put = (config: AxiosRequestConfig): Promise<AxiosResponse> =>
  request({ ...config, method: "PUT" });

export const patch = (config: AxiosRequestConfig): Promise<AxiosResponse> =>
  request({ ...config, method: "PATCH" });

export const del = (config: AxiosRequestConfig): Promise<AxiosResponse> =>
  request({ ...config, method: "DELETE" });

export default { del, get, patch, post, put };
