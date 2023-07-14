import axios, { AxiosError } from "axios";

const baseUrl = process.env.BASE_URL || "http://localhost:3333/api";

const api = axios.create({
  baseURL: baseUrl,
});

api.interceptors.response.use(
  (response) => response,
  (error: AxiosError) => {
    const { response } = error;
    if (response?.status === 401 || response?.status === 400) {
      return {
        data: { redirect: true },
      };
    }
  }
);

export default api;
