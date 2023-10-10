import { RefObject, useEffect, useState } from "react";
import { Direction, Position } from "./type";
import { getAlignment, getPositionToAnchor, getShapePosition } from "./utils";

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

type UseTooltipPositionToAnchorProps = {
  tooltipRef: RefObject<HTMLSpanElement>;
  anchorRef: RefObject<HTMLSpanElement>;
  direction: Direction;
  position: Position;
  isOpen: boolean;
};

export const useTooltipPositionToAnchor = ({
  tooltipRef,
  anchorRef,
  direction,
  position,
  isOpen,
}: UseTooltipPositionToAnchorProps) => {
  const [tooltipPosition, setTooltipPosition] = useState<TooltipPosition>({});
  const [shapePosition, setShapePosition] = useState<ShapePosition>({});

  useEffect(() => {
    if (isOpen && anchorRef.current && tooltipRef.current) {
      const { left, width, bottom, top, right, height } = anchorRef.current.getBoundingClientRect();
      const tooltipWidth = tooltipRef.current.getBoundingClientRect().width || 0;
      const tooltipHeight = tooltipRef.current.getBoundingClientRect().height || 0;

      const tooltipPadding = 12;
      const shape = width / 2;
      const windowScrollY = window.scrollY;

      // position
      const topOfAnchor = top - tooltipHeight - tooltipPadding + windowScrollY;
      const bottomOfAnchor = bottom + tooltipPadding + windowScrollY;

      const leftOfAnchor = left - tooltipWidth - tooltipPadding;
      const rightOfAnchor = right + tooltipPadding;

      // alignment
      const horizontalCenter = left + width / 2 - tooltipWidth / 2;
      const verticalCenter = top + height / 2 - tooltipHeight / 2 + windowScrollY;

      const alignRight = right - tooltipWidth;
      const alignLeft = left;

      const alignment =
        direction === "left" || direction === "right"
          ? { top: verticalCenter }
          : getAlignment(position, alignRight, alignLeft, horizontalCenter);
      const positionToAnchor = getPositionToAnchor(
        direction,
        topOfAnchor,
        bottomOfAnchor,
        leftOfAnchor,
        rightOfAnchor,
      );

      const shapePosition = getShapePosition(position, shape);

      setTooltipPosition({
        ...alignment,
        ...positionToAnchor,
      });
      setShapePosition(shapePosition);
    }
  }, [isOpen, direction, position, tooltipRef, anchorRef]);

  return { tooltipPosition, shapePosition };
};
