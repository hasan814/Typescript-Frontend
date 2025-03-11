import { toast } from "sonner";

import axios from "axios";

// ============ Function to Read Cookies ===============
const getCookie = (name: string) => {
  const match = document.cookie.match(new RegExp("(^| )" + name + "=([^;]+)"));
  return match ? match[2] : null;
};

// ============ Create API Client ===============
const apiClient = axios.create({
  baseURL: import.meta.env.NEXT_PUBLIC_API_BASE_URL,
  headers: { "Content-Type": "application/json" },
});

// ============ Request Interceptor ===============
apiClient.interceptors.request.use(
  (config) => {
    const token = getCookie("accessToken");
    if (token) config.headers.Authorization = `Bearer ${token}`;
    return config;
  },
  (error) => Promise.reject(error)
);

// ============ Response Interceptor ===============
apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      toast.error("Session expired, please log in again.");
      document.cookie = "accessToken=; Max-Age=0; path=/;";
      document.cookie = "user=; Max-Age=0; path=/;";
      window.location.reload();
    }
    return Promise.reject(error);
  }
);

export default apiClient;
