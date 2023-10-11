import { ReactNode } from "react";

export type PositionToAnchor = "bottom" | "top" | "right" | "left";

export type Position = "left" | "right" | "center";

export type TooltipProps = {
  positionToAnchor: PositionToAnchor;
  position: Position;
  tooltipText: string;
  children: string | ReactNode;
};
