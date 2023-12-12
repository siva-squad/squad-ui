import { ReactNode } from "react";

import { ButtonProps } from "@components/atoms/Button/type";

type SaveButtonProps = Pick<ButtonProps, "disabled"> & {
  onSave: () => void;
  text: string;
};

type CancelButtonProps = Pick<ButtonProps, "disabled"> & {
  onClose: () => void;
  text: string;
};

export type DialogProps = {
  children: string | ReactNode;
  title: string;
  saveButtonProps: SaveButtonProps;
  cancelButtonProps: CancelButtonProps;
  isOpen: boolean;
  theme?: "default" | "red";
};
