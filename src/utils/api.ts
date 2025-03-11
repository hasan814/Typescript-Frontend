export const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "http://localhost:5600";

export const AUTH_ENDPOINTS = {
  SIGNUP: `${API_BASE_URL}/auth/register`,
  LOGIN: `${API_BASE_URL}/auth/login`,
};
