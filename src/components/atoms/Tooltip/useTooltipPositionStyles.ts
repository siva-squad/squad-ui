import { useLayoutEffect, useState } from "react";
import { UseTooltipPositionStylesProps, TooltipPositionStyles, ShapePositionStyles } from "./type";
import {
  checkIsOffScreen,
  getAlignment,
  getPositionToAnchor,
  getShapeClasses,
  getShapePosition,
} from "./utils";

export const useTooltipPositionStyles = ({
  tooltipRef,
  anchorRef,
  positionToAnchor,
  alignment,
  isOpen,
}: UseTooltipPositionStylesProps) => {
  const [tooltipPositionStyles, setTooltipPositionStyles] = useState<TooltipPositionStyles>({});
  const [shapePositionStyles, setShapePositionStyles] = useState<ShapePositionStyles>({
    shapePosition: {},
    shapeClasses: "",
  });

  useLayoutEffect(() => {
    if (isOpen && anchorRef.current && tooltipRef.current) {
      const { left, width, bottom, top, right, height } = anchorRef.current.getBoundingClientRect();
      const tooltipWidth = tooltipRef.current.getBoundingClientRect().width || 0;
      const tooltipHeight = tooltipRef.current.getBoundingClientRect().height || 0;
      const windowScrollY = window.scrollY;

      const tooltipPadding = 12;
      const shape = width / 2;

      const bottomSpace = window.innerHeight - bottom;
      const rightSpace = window.innerWidth - right;
      const centerSpace = (tooltipWidth - width) / 2;

      const { checkedPositionToAnchor, checkedAlignment } = checkIsOffScreen({
        bottomSpace,
        rightSpace,
        centerSpace,
        top,
        left,
        tooltipHeight,
        tooltipWidth,
        positionToAnchor,
        alignment,
      });

      const topOfAnchor = top - tooltipHeight - tooltipPadding + windowScrollY;
      const bottomOfAnchor = bottom + tooltipPadding + windowScrollY;

      const leftOfAnchor = left - tooltipWidth - tooltipPadding;
      const rightOfAnchor = right + tooltipPadding;

      const horizontalCenter = left + width / 2 - tooltipWidth / 2;
      const verticalCenter = top + height / 2 - tooltipHeight / 2 + windowScrollY;

      const alignRight = right - tooltipWidth;
      const alignLeft = left;

      const alignmentStyles =
        checkedPositionToAnchor === "left" || checkedPositionToAnchor === "right"
          ? { top: verticalCenter }
          : getAlignment({
              alignment: checkedAlignment,
              alignRight,
              alignLeft,
              alignCenter: horizontalCenter,
            });

      const positionToAnchorStyles = getPositionToAnchor({
        position: checkedPositionToAnchor,
        topOfAnchor,
        bottomOfAnchor,
        leftOfAnchor,
        rightOfAnchor,
      });

      const shapePosition =
        checkedPositionToAnchor === "left" || checkedPositionToAnchor === "right"
          ? {}
          : getShapePosition(checkedAlignment, shape);

      const shapeClasses = getShapeClasses(checkedPositionToAnchor);

      setTooltipPositionStyles({
        ...alignmentStyles,
        ...positionToAnchorStyles,
      });
      setShapePositionStyles({ shapePosition, shapeClasses });
    }
  }, [isOpen, positionToAnchor, alignment, tooltipRef, anchorRef]);

  return { tooltipPositionStyles, shapePositionStyles };
};
