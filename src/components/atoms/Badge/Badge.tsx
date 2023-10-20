import { BADGE_CLASS_NAME } from "./const";
import type { BadgeProps } from "./type";

export const Badge = ({ children, color = "primary", theme = "fill" }: BadgeProps) => {
  return <span className={BADGE_CLASS_NAME({ color, theme })}>{children}</span>;
};
