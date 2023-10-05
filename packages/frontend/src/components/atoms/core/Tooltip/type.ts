export type Direction = "bottom" | "top" | "right" | "left";

export type Position = "left" | "right" | "center";

export type TooltipProps = {
  direction: Direction;
  position: Position;
  tooltipText: string;
};
