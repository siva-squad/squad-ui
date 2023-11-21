import { ReactNode } from "react";

export type BaseModalProps = {
  children: string | ReactNode;
  title: string;
  onCloseModal: () => void;
};
