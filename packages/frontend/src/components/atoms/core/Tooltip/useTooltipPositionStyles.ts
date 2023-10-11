import { RefObject, useLayoutEffect, useState } from "react";
import { PositionToAnchor, Alignment } from "./type";
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
  positionToAnchor: PositionToAnchor;
  alignment: Alignment;
  isOpen: boolean;
};

export const useTooltipPositionStyles = ({
  tooltipRef,
  anchorRef,
  positionToAnchor,
  alignment,
  isOpen,
}: UseTooltipPositionStylesProps) => {
  const [tooltipPositionStyles, setTooltipPositionStyles] = useState<TooltipPositionStyles>({});
  const [shapePositionStyles, setShapePositionStyles] = useState<ShapePositionStyles>({});

  useLayoutEffect(() => {
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

      const alignmentStyles =
        positionToAnchor === "left" || positionToAnchor === "right"
          ? { top: verticalCenter }
          : getAlignment(alignment, alignRight, alignLeft, horizontalCenter);

      const positionToAnchorStyles = getPositionToAnchor(
        positionToAnchor,
        topOfAnchor,
        bottomOfAnchor,
        leftOfAnchor,
        rightOfAnchor,
      );

      const shapePosition =
        positionToAnchor === "left" || positionToAnchor === "right"
          ? {}
          : getShapePosition(alignment, shape);

      setTooltipPositionStyles({
        ...alignmentStyles,
        ...positionToAnchorStyles,
      });
      setShapePositionStyles(shapePosition);
    }
  }, [isOpen, positionToAnchor, alignment, tooltipRef, anchorRef]);

  return { tooltipPositionStyles, shapePositionStyles };
};
