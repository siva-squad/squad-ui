import { ReactNode, RefObject } from "react";

// Tooltip types

export type PositionToAnchor = "bottom" | "top" | "right" | "left";

export type Alignment = "left" | "right" | "center";

export type TooltipProps = {
  positionToAnchor: PositionToAnchor;
  alignment: Alignment;
  tooltipText: string;
  children: string | ReactNode;
  ariaLabelledBy: string;
};

// Hook types

export type TooltipPositionStyles = {
  top?: number;
  left?: number;
  bottom?: number;
  right?: number;
};

export type ShapePositionStyles = {
  shapePosition: { right?: number; left?: number };
  shapeClasses: string;
};

export type UseTooltipPositionStylesProps = {
  tooltipRef: RefObject<HTMLSpanElement>;
  anchorRef: RefObject<HTMLSpanElement>;
  positionToAnchor: PositionToAnchor;
  alignment: Alignment;
  isOpen: boolean;
};
