import { forwardRef } from "react";
import { TEXTAREA_CLASS_NAME } from "./const";

import type { TextareaProps } from "./type";

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ state, resize = "both", showSuccess, ...props }, ref) => {
    const variants = {
      isSuccess: state !== "error" && showSuccess,
      isError: state === "error",
      resize,
    };

    return (
      <textarea
        className={TEXTAREA_CLASS_NAME(variants)}
        ref={ref}
        {...props}
      />
    );
  },
);

Textarea.displayName = "Textarea";
