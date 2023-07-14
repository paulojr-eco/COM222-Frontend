import axios, { AxiosError, AxiosResponse } from "axios";

const baseUrl = process.env.BASE_URL || "http://localhost:3333/api";

const api = axios.create({
  baseURL: baseUrl,
});

api.interceptors.response.use(
  (response: AxiosResponse) => {
    return response;
  },
  (error: AxiosError) => {
    const { response } = error;
    if (response?.status === 401) {
      return {
        data: { redirect: true },
      };
    }
    return Promise.reject(error);
  }
);

export default api;
