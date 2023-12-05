import { ReactNode } from "react";
import { THEMES } from "./const";
import { COLORS } from "@/src/const/colors";

export type Colors = (typeof COLORS)[number];

export type Theme = (typeof THEMES)[number];

export type BadgeProps = {
  children: ReactNode;
  color?: Colors;
  theme?: Theme;
};
