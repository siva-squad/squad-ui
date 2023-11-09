import { ReactNode, RefObject } from "react";

export type PositionToAnchor = "bottom" | "top" | "right" | "left";

export type Alignment = "left" | "right" | "center";

export type TooltipProps = {
  positionToAnchor: PositionToAnchor;
  alignment: Alignment;
  tooltipText: string;
  children: string | ReactNode;
  ariaLabelledBy: string;
};

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

export type CheckIsOffScreenProps = {
  bottomSpace: number;
  rightSpace: number;
  centerSpace: number;
  top: number;
  left: number;
  tooltipHeight: number;
  tooltipWidth: number;
  positionToAnchor: PositionToAnchor;
  alignment: Alignment;
};

// utility function return types

export type CheckIsOffScreenReturn = {
  checkedPositionToAnchor: PositionToAnchor;
  checkedAlignment: Alignment;
};

export type GetPositionToAnchorReturn = {
  top?: number;
  left?: number;
};

export type GetShapePositionReturn = {
  left?: number;
  right?: number;
};
