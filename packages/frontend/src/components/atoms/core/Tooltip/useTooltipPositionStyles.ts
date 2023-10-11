import { RefObject, useEffect, useState } from "react";
import { Direction, Position } from "./type";
import { getAlignment, getPositionToAnchor, getShapePosition } from "./utils";

// NAMING
type TooltipPositionStyles = {
  top?: number;
  left?: number;
  bottom?: number;
  right?: number;
};

type ShapePositionStyles = {
  right?: number;
  left?: number;
};

type UseTooltipPositionStylesProps = {
  tooltipRef: RefObject<HTMLSpanElement>;
  anchorRef: RefObject<HTMLSpanElement>;
  direction: Direction;
  position: Position;
  isOpen: boolean;
};

export const useTooltipPositionStyles = ({
  tooltipRef,
  anchorRef,
  direction,
  position,
  isOpen,
}: UseTooltipPositionStylesProps) => {
  const [tooltipPositionStyles, setTooltipPositionStyles] = useState<TooltipPositionStyles>({});
  const [shapePositionStyles, setShapePositionStyles] = useState<ShapePositionStyles>({});

  useEffect(() => {
    if (isOpen && anchorRef.current && tooltipRef.current) {
      const { left, width, bottom, top, right, height } = anchorRef.current.getBoundingClientRect();
      const tooltipWidth = tooltipRef.current.getBoundingClientRect().width || 0;
      const tooltipHeight = tooltipRef.current.getBoundingClientRect().height || 0;
      const windowScrollY = window.scrollY;

      const tooltipPadding = 12;
      const shape = width / 2;

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

      setTooltipPositionStyles({
        ...alignment,
        ...positionToAnchor,
      });
      setShapePositionStyles(shapePosition);
    }
  }, [isOpen, direction, position, tooltipRef, anchorRef]);

  return { tooltipPositionStyles, shapePositionStyles };
};
