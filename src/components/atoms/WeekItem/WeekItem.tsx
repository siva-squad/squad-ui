import { WEEK_ITEM_SIZE, WEEK_ITEM_VARIANTS } from "./const";
import { WeekItemProps } from "./type";

export const WeekItem = ({ children }: WeekItemProps) => {
  return (
    <span
      className={WEEK_ITEM_VARIANTS()}
      style={{ ...WEEK_ITEM_SIZE }}
    >
      {children}
    </span>
  );
};
