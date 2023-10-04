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

// Useage: <Tooltip message="Tooltip text">Some children</Tooltip>
// Hover on text/children: Tooltip opens
// ESC: closes Tooltip --> cursor still on it, what will happen?!
// Keyboard accessible
// Calculate positioning of Tooltip based on space available

// TESTING!!!

// a11y: https://accessibilityinsights.io/info-examples/web/aria-tooltip-name/
