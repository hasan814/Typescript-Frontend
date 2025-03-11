import { AUTH_ENDPOINTS } from "@/utils/api";
import { AuthFormState } from "@/types";
import { useState } from "react";
import { toast } from "sonner";

import apiClient from "@/utils/apiClient";

export const useAuthForm = () => {
  // ============== State ==============
  const [isSignUp, setIsSignUp] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [formData, setFormData] = useState<AuthFormState>({
    fullName: "",
    username: "",
    password: "",
  });

  // ============== Change Function ==============
  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  // ============== API Function ==============
  const handleApiError = (err: any) => {
    const message = err.response?.data?.message || "An unexpected error occurred";
    setError(message);
    toast.error(message);
  };

  // ============== Submit Function ==============
  const submitHandler = async (e: React.FormEvent, onClose: (value: boolean) => void) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    const endpoint = isSignUp ? AUTH_ENDPOINTS.SIGNUP : AUTH_ENDPOINTS.LOGIN;
    try {
      const { data } = await apiClient.post(endpoint, formData);
      if (!data) throw new Error("Something went wrong");
      const { user } = data.data;
      const { accessToken } = user;

      localStorage.setItem("user", JSON.stringify(user));
      sessionStorage.setItem("accessToken", accessToken);

      toast.success(isSignUp ? "Account created successfully!" : "Signed in successfully!");

      onClose(false);
      window.location.reload();
    } catch (err) {
      handleApiError(err);
    } finally {
      setLoading(false);
    }
  };

  return {
    isSignUp,
    setIsSignUp,
    loading,
    error,
    formData,
    changeHandler,
    submitHandler,
  };
};
