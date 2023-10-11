import { ReactNode } from "react";

export type PositionToAnchor = "bottom" | "top" | "right" | "left";

export type Alignment = "left" | "right" | "center";

export type TooltipProps = {
  positionToAnchor: PositionToAnchor;
  alignment: Alignment;
  tooltipText: string;
  children: string | ReactNode;
  ariaLabelledBy: string;
};
