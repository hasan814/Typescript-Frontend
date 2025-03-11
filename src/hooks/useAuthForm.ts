import { AuthFormState, IUser } from "@/types";
import { AUTH_ENDPOINTS } from "@/utils/api";
import { useCookies } from "react-cookie";
import { AxiosError } from "axios";
import { useState } from "react";
import { toast } from "sonner";

import apiClient from "@/utils/apiClient";


export const useAuthForm = () => {
  // ============== State ==============
  const [isSignUp, setIsSignUp] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const [, setCookie] = useCookies(["accessToken", "user"]);

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
  const handleApiError = (err: unknown) => {
    if (err instanceof AxiosError && err.response?.data) {
      const message = err.response.data.message || "An unexpected error occurred";
      setError(message);
      toast.error(message);
    } else {
      setError("An unexpected error occurred");
      toast.error("An unexpected error occurred");
    }
  };


  // ============== Submit Function ==============
  const submitHandler = async (e: React.FormEvent, onClose: (value: boolean) => void) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    const endpoint = isSignUp ? AUTH_ENDPOINTS.SIGNUP : AUTH_ENDPOINTS.LOGIN;

    try {
      const { data } = await apiClient.post<{ data: { user: IUser } }>(endpoint, formData);
      if (!data) throw new Error("Something went wrong");

      const { user } = data.data;

      setCookie("user", JSON.stringify(user), { path: "/", maxAge: 86400, secure: true });
      setCookie("accessToken", user.accessToken, { path: "/", maxAge: 3600, secure: true });

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
