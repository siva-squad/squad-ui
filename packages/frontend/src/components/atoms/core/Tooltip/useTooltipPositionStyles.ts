import { useLayoutEffect, useState } from "react";
import { UseTooltipPositionStylesProps, TooltipPositionStyles, ShapePositionStyles } from "./type";
import { getAlignment, getPositionToAnchor, getShapeClasses, getShapePosition } from "./utils";

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

      const shapeClasses = getShapeClasses(positionToAnchor);

      setTooltipPositionStyles({
        ...alignmentStyles,
        ...positionToAnchorStyles,
      });
      setShapePositionStyles({ shapePosition, shapeClasses });
    }
  }, [isOpen, positionToAnchor, alignment, tooltipRef, anchorRef]);

  return { tooltipPositionStyles, shapePositionStyles };
};
