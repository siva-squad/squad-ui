import { ReactNode } from "react";

export type BaseModalProps = {
  children: string | ReactNode;
  title: string;
  onClose: () => void;
  cancelButtonText: string;
  saveButtonText: string;
  isOpen: boolean;
};
