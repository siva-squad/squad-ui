import { RefObject, useEffect, useState } from "react";
import { Direction, Position } from "./type";

// NAMING
type TooltipPosition = {
  top?: number;
  left?: number;
  bottom?: number;
  right?: number;
};

type ShapePosition = {
  right?: number;
  left?: number;
};

type UseTooltipPositionProps = {
  tooltipRef: RefObject<HTMLSpanElement>;
  anchorRef: RefObject<HTMLSpanElement>;
  direction: Direction;
  position: Position;
  isOpen: boolean;
};

export const useTooltipPosition = ({
  tooltipRef,
  anchorRef,
  direction,
  position,
  isOpen,
}: UseTooltipPositionProps) => {
  const [tooltipPosition, setTooltipPosition] = useState<TooltipPosition>({});
  const [shapePosition, setShapePosition] = useState<ShapePosition>({});

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
        });
        setShapePosition({});
      }

      if (direction === "left") {
        setTooltipPosition({
          top: middleHeight,
          left: left - tooltipWidth - 12,
        });
        setShapePosition({});
      }

      if (position === "left" && direction === "bottom") {
        setTooltipPosition({
          top: bottomAlign,
          left: left,
        });
        setShapePosition({
          left: shape,
        });
      }

      if (position === "right" && direction === "bottom") {
        setTooltipPosition({
          top: bottomAlign,
          left: rightAlign,
        });
        setShapePosition({
          right: shape,
        });
      }

      if (position === "left" && direction === "top") {
        setTooltipPosition({
          top: topAlign,
          left: left,
        });
        setShapePosition({
          left: shape,
        });
      }

      if (position === "right" && direction === "top") {
        setTooltipPosition({
          top: topAlign,
          left: rightAlign,
        });
        setShapePosition({
          right: shape,
        });
      }

      if (position === "center" && direction === "top") {
        setTooltipPosition({
          top: topAlign,
          left: middleWidth,
        });
        setShapePosition({});
      }

      if (position === "center" && direction === "bottom") {
        setTooltipPosition({
          top: bottomAlign,
          left: middleWidth,
        });
        setShapePosition({});
      }
    }
  }, [isOpen, direction, position, tooltipRef, anchorRef]);

  return { tooltipPosition, shapePosition };
};
