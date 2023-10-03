import { clsx } from "clsx";

import { Shape } from "./Shape";
import type { TooltipProps } from "./type";

export const Tooltip = ({ direction, position, text }: TooltipProps) => {
  const directionClasses = getDirectionClass(direction);
  const positionClasses = getPositionClass(position); // if direction === left or right should only be center!!

  return (
    <div className="relative inline-flex items-center justify-center rounded p-2 text-sm leading-normal shadow-04">
      {text}
      <Shape className={clsx("absolute m-auto", directionClasses, positionClasses)} />
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
      return "left-[-7px] rotate-90";
    case "right":
      return "right-[-7px] -rotate-90";
  }
}
function getPositionClass(position: string) {
  switch (position) {
    case "center":
      return "";
    case "left":
      return "left-1/4";
    case "right":
      return "right-1/4";
  }
}
