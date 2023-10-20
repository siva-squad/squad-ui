import { ComponentProps } from "react";

export type SearchInputProps = ComponentProps<"input"> & {
  inputSize: "normal" | "small";
  inputStyle: "filled" | "outline";
  label?: string;
};
