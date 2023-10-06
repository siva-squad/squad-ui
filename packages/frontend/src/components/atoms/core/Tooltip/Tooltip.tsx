import { useEffect, useRef, useState } from "react";
import { clsx } from "clsx";

import { SHAPE_DIRECTION_STYLE } from "./consts";
import { Shape } from "./Shape";
import type { TooltipProps } from "./type";

type Position = {
  top?: number;
  left?: number;
  width?: number;
  bottom?: number;
  right?: number;
};

type ShapePosition = {
  right?: number;
  left?: number;
};

export const Tooltip = ({ direction, position, tooltipText, children }: TooltipProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [tooltipPosition, setTooltipPosition] = useState<Position>({});
  const [shapePosition, setShapePosition] = useState<ShapePosition>({});
  const tooltipRef = useRef<HTMLSpanElement>(null);
  const anchorRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (isOpen && anchorRef.current && tooltipRef.current) {
      const { left, width, bottom, top, right, height } = anchorRef.current.getBoundingClientRect();
      const tooltipWidth = tooltipRef.current.getBoundingClientRect().width || 0;
      const tooltipHeight = tooltipRef.current.getBoundingClientRect().height || 0;

      const middleWidth = left + width / 2 - tooltipWidth / 2;
      const middleHeight = top + height / 2 - tooltipHeight / 2;
      const shape = width / 2;

      const rightAlign = right - tooltipWidth;
      const topAlign = top - tooltipHeight - 12;
      const bottomAlign = bottom + 12;

      if (direction === "right") {
        setTooltipPosition({
          top: middleHeight,
          left: right + 12,
          width,
        });
        setShapePosition({});
      }

      if (direction === "left") {
        setTooltipPosition({
          top: middleHeight,
          left: left - tooltipWidth - 12,
          width,
        });
        setShapePosition({});
      }

      if (position === "left" && direction === "bottom") {
        setTooltipPosition({
          top: bottomAlign,
          left: left,
          width,
        });
        setShapePosition({
          left: shape,
        });
      }

      if (position === "right" && direction === "bottom") {
        setTooltipPosition({
          top: bottomAlign,
          left: rightAlign,
          width,
        });
        setShapePosition({
          right: shape,
        });
      }

      if (position === "left" && direction === "top") {
        setTooltipPosition({
          top: topAlign,
          left: left,
          width,
        });
        setShapePosition({
          left: shape,
        });
      }

      if (position === "right" && direction === "top") {
        setTooltipPosition({
          top: topAlign,
          left: rightAlign,
          width,
        });
        setShapePosition({
          right: shape,
        });
      }

      if (position === "center" && direction === "top") {
        setTooltipPosition({
          top: topAlign,
          left: middleWidth,
          width,
        });
        setShapePosition({});
      }

      if (position === "center" && direction === "bottom") {
        setTooltipPosition({
          top: bottomAlign,
          left: middleWidth,
          width,
        });
        setShapePosition({});
      }
    }
  }, [isOpen, direction, position]);

  return (
    <>
      {isOpen && (
        <span
          ref={tooltipRef}
          className={clsx(
            "absolute z-40 inline-block w-40 rounded bg-white text-sm leading-normal shadow-04",
          )}
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
