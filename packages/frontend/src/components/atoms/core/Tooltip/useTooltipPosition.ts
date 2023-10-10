import { RefObject, useEffect, useState } from "react";
import { Direction, Position } from "./type";
import { getPositions } from "./utils";

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

      const tooltipAnchorGap = 12;

      const middleWidth = left + width / 2 - tooltipWidth / 2;
      const middleHeight = top + height / 2 - tooltipHeight / 2;
      const shape = width / 2;

      const rightAlign = right - tooltipWidth;
      const topAlign = top - tooltipHeight - tooltipAnchorGap;
      const bottomAlign = bottom + tooltipAnchorGap;

      const { tooltipPosition, shapePosition } = getPositions({
        middleHeight,
        right,
        tooltipAnchorGap,
        left,
        bottomAlign,
        topAlign,
        rightAlign,
        middleWidth,
        shapePosition: shape,
        tooltipWidth,
        direction,
        position,
      });

      setTooltipPosition(tooltipPosition);
      setShapePosition(shapePosition);
    }
  }, [isOpen, direction, position, tooltipRef, anchorRef]);

  return { tooltipPosition, shapePosition };
};
