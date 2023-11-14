import { REQUIRED_BADGE_CLASS_NAME } from "./const";
import type { RequiredBadgeProps } from "./type";

export const RequiredBadge = ({ isRequired }: RequiredBadgeProps) => {
  return (
    <span className={REQUIRED_BADGE_CLASS_NAME({ isRequired })}>
      {isRequired ? "必須" : "任意"}
    </span>
  );
};
