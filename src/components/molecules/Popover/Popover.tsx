import { clsx } from "clsx";

import { POPOVER_CONTENT_CLASS_NAME, POPOVER_WRAPPER_CLASS_NAME } from "./const";
import type { PopoverProps } from "./type";

// TODO: HTMLのpopoverで対応したい
export const Popover = ({
  id,
  children,
  content,
  position,
  mode = "hover",
  isOpen = false,
}: PopoverProps) => {
  return (
    <div className="relative w-fit">
      <div
        id={id}
        className="peer w-fit"
      >
        {children}
      </div>

      <div
        role="dialog"
        className={clsx(POPOVER_CONTENT_CLASS_NAME({ position, mode, isOpen }))}
      >
        <div className={POPOVER_WRAPPER_CLASS_NAME({ position })}>{content}</div>
      </div>
    </div>
  );
};
