//import { clsx } from "clsx";

import { Shape } from "./Shape";
import type { TooltipProps } from "./type";

export const Tooltip = ({ direction, position, text }: TooltipProps) => {
  const directionClasses = getDirectionClass(direction);

  return (
    <div className="relative inline-flex items-center justify-center rounded p-2 text-sm leading-normal shadow-04">
      {text}
      <Shape className="absolute -right-1.5 m-auto -rotate-90" />
    </div>
  );
};

function getDirectionClass(direction: string) {
  switch (direction) {
    case "bottom":
      return "-bottom-1";
    case "top":
      return "-top-1 rotate-180";
    case "left":
      return "-left-1.5 rotate-90";
    case "right":
      return "-right-1.5 -rotate-90";
  }
}
