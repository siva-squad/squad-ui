import { TooltipProps } from "./type";

export const DIRECTION_STYLE: { [key in TooltipProps["direction"]]: string } = {
  bottom: "bottom-[-4.5px]",
  top: "top-[-4.5px] rotate-180",
  left: "left-[-7px] rotate-90",
  right: "right-[-7px] -rotate-90",
} as const;

export const POSITION_STYLE: { [key in TooltipProps["position"]]: string } = {
  center: "",
  left: "left-1/4",
  right: "right-1/4",
} as const;
