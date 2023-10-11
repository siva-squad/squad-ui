import { TooltipProps } from "./type";

export const SHAPE_DIRECTION_STYLE: { [key in TooltipProps["positionToAnchor"]]: string } = {
  top: "bottom-[-4.5px]",
  bottom: "top-[-4.5px] rotate-180",
  right: "left-[-7px] rotate-90",
  left: "right-[-7px] -rotate-90",
} as const;

// direction bottom = tooltip on bottom, shape on top
// direction top = tooltip on top, shape on bottom
// direction right = tooltip right, shape left
// direction left = tooltip left, shape right
