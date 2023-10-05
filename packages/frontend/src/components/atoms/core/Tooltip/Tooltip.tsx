import { clsx } from "clsx";

import { DIRECTION_STYLE, POSITION_STYLE } from "./consts";
import { Shape } from "./Shape";
import type { TooltipProps } from "./type";

export const Tooltip = ({ direction, position, tooltipText }: TooltipProps) => {
  return (
    <div className="relative inline-flex items-center justify-center rounded p-2 text-sm leading-normal shadow-04">
      {tooltipText}
      <Shape
        className={clsx("absolute m-auto", DIRECTION_STYLE[direction], POSITION_STYLE[position])}
      />
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
