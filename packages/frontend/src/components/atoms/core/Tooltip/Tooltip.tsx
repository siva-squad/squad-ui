import { useRef, useState } from "react";
import { clsx } from "clsx";

import { SHAPE_DIRECTION_STYLE } from "./consts";
import { Shape } from "./Shape";
import type { TooltipProps } from "./type";
import { useTooltipPosition } from "./useTooltipPosition";

export const Tooltip = ({ direction, position, tooltipText, children }: TooltipProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const tooltipRef = useRef<HTMLSpanElement>(null);
  const anchorRef = useRef<HTMLSpanElement>(null);
  const { tooltipPosition, shapePosition } = useTooltipPosition({
    tooltipRef,
    anchorRef,
    direction,
    position,
    isOpen,
  });

  return (
    <>
      {isOpen && (
        <span
          ref={tooltipRef}
          className="absolute z-40 inline-block w-40 rounded bg-white text-sm leading-normal shadow-04"
          style={{
            top: tooltipPosition.top,
            left: tooltipPosition.left,
            bottom: tooltipPosition.bottom,
            right: tooltipPosition.right,
          }}
        >
          <span className="relative inline-flex h-full w-full items-center justify-center p-2">
            {tooltipText}
            <Shape
              className={clsx("absolute m-auto", SHAPE_DIRECTION_STYLE[direction])}
              style={{
                right: shapePosition.right,
                left: shapePosition.left,
              }}
            />
          </span>
        </span>
      )}
      <span
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
        className="inline-block max-w-full"
        ref={anchorRef}
      >
        {children}
      </span>
    </>
  );
};

// Useage: <Tooltip message="Tooltip text">Some children</Tooltip>
// Hover on text/children: Tooltip opens
// Calculate positioning of Tooltip based on space available
// What is the number 12 for --> save as variabel and use it

// TESTING!!!

// a11y: https://accessibilityinsights.io/info-examples/web/aria-tooltip-name/
