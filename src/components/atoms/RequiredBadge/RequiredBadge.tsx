import { REQUIRED_BADGE_CLASS_NAME } from "./const";
import type { RequiredBadgeProps } from "./type";

export const RequiredBadge = ({
  isRequired,
  requiredText = "必須",
  optionalText = "任意",
}: RequiredBadgeProps) => {
  return (
    <span className={REQUIRED_BADGE_CLASS_NAME({ isRequired })}>
      {isRequired ? requiredText : optionalText}
    </span>
  );
};
