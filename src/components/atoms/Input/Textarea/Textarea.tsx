import { TEXTAREA_CLASS_NAME } from "./const";

import type { TextareaProps } from "./type";

export const Textarea = ({ state, resize = "both", showSuccess, ...props }: TextareaProps) => {
  const variants = {
    isSuccess: state !== "error" && showSuccess,
    isError: state === "error",
    resize,
  };

  return (
    <textarea
      className={TEXTAREA_CLASS_NAME(variants)}
      {...props}
    />
  );
};
