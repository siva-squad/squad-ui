import { ReactNode } from "react";

export type DialogProps = {
  children: string | ReactNode;
  title: string;
  isOpen: boolean;
  onClose?: () => void;
};
