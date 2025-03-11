export interface IBlog {
  title: string;
  image: string;
  text: string;
  author: string
}


export interface IMobileMenuProps {
  isOpen: boolean;
}

export interface IAuthModalProps {
  isOpen: boolean;
  onClose: (open: boolean) => void;
}

export interface AuthFormState {
  fullName?: string;
  username: string;
  password: string;
}

export interface AuthFormProps {
  isSignUp: boolean;
  formData: { fullName?: string; username: string; password: string };
  loading: boolean;
  error: string;
  changeHandler: (e: React.ChangeEvent<HTMLInputElement>) => void;
  submitHandler: (e: React.FormEvent) => void;
  toggleAuthMode: () => void;
}
