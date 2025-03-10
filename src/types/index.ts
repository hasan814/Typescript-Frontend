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