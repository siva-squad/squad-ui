import { clsx } from "clsx";

import { Shape } from "./Shape";
import type { TooltipProps } from "./type";
import { getDirectionClass, getPositionClass } from "./utils";

export const Tooltip = ({ direction, position, text }: TooltipProps) => {
  const directionClasses = getDirectionClass(direction);
  const positionClasses =
    direction === "left" || direction === "right" ? "" : getPositionClass(position);

  return (
    <div className="relative inline-flex items-center justify-center rounded p-2 text-sm leading-normal shadow-04">
      {text}
      <Shape className={clsx("absolute m-auto", directionClasses, positionClasses)} />
    </div>
  );
};
