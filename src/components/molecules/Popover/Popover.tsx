import { clsx } from "clsx";

import { POPOVER_CONTENT_CLASS_NAME, POPOVER_WRAPPER_CLASS_NAME } from "./const";
import type { PopoverProps } from "./type";

// TODO: HTMLのpopoverで対応したい
export const Popover = ({ id, children, content, position }: PopoverProps) => {
  return (
    <div className="relative w-fit">
      <div
        id={id}
        className="peer w-fit"
      >
        {children}
      </div>

      <div
        className={clsx(
          "absolute z-50 hidden w-max",
          "hover:flex peer-hover:flex",
          "focus:flex peer-focus:flex",
          POPOVER_CONTENT_CLASS_NAME({ position }),
        )}
      >
        <div className={POPOVER_WRAPPER_CLASS_NAME({ position })}>{content}</div>
      </div>
    </div>
  );
};
