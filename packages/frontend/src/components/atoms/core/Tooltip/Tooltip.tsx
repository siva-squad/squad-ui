import { clsx } from "clsx";

import { DIRECTION_STYLE, POSITION_STYLE } from "./consts";
import { Shape } from "./Shape";
import type { TooltipProps } from "./type";

export const Tooltip = ({ direction, position, tooltipText, children }: TooltipProps) => {
  const positionStyles =
    direction === "left" || direction === "right" ? "" : POSITION_STYLE[position];

  return (
    <div>
      <div className="inline-flex rounded text-sm leading-normal shadow-04">
        <span className="relative inline-flex h-full w-full items-center justify-center p-2">
          {tooltipText}
          <Shape className={clsx("absolute m-auto", DIRECTION_STYLE[direction], positionStyles)} />
        </span>
      </div>
      {children}
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
