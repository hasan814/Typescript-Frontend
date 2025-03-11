import { IAuthModalProps } from "@/types";
import { useAuthForm } from "@/hooks/useAuthForm";

import AuthForm from "./AuthForm";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

const AuthModal = ({ isOpen, onClose }: IAuthModalProps) => {
  const {
    isSignUp,
    setIsSignUp,
    loading,
    error,
    formData,
    changeHandler,
    submitHandler,
  } = useAuthForm();

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>{isSignUp ? "Sign Up" : "Sign In"}</DialogTitle>
          <DialogDescription>
            {isSignUp
              ? "Create a new account"
              : "Enter your credentials to access your account."}
          </DialogDescription>
        </DialogHeader>

        <AuthForm
          error={error}
          loading={loading}
          isSignUp={isSignUp}
          formData={formData}
          changeHandler={changeHandler}
          submitHandler={(e) => submitHandler(e, onClose)}
          toggleAuthMode={() => setIsSignUp(!isSignUp)}
        />
      </DialogContent>
    </Dialog>
  );
};

export default AuthModal;
