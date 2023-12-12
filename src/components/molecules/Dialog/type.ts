import { ReactNode } from "react";

export type DialogProps = {
  children: string | ReactNode;
  title: string;
  onClose: () => void;
  onSave: () => void;
  cancelButtonText: string;
  saveButtonText: string;
  isOpen: boolean;
  theme?: "default" | "red";
};
