import { ReactNode } from "react";
import { COLORS } from "@const/colors";

import { THEMES } from "./const";

export type Colors = (typeof COLORS)[number];

export type Theme = (typeof THEMES)[number];

export type BadgeProps = {
  children: ReactNode;
  color?: Colors;
  theme?: Theme;
};
