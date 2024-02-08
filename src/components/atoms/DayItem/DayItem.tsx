import { DAY_ITEM_SIZE, DAY_ITEM_VARIANTS } from "./const";
import { DayItemProps } from "./type";

export const DayItem = ({ date, theme, transition, onClick, disabled, ...props }: DayItemProps) => {
  return (
    <button
      className="grid place-items-center"
      style={{ ...DAY_ITEM_SIZE }}
      onClick={() => onClick(date)}
      aria-label={`${date.getFullYear()}${date.getMonth() + 1}${date.getDate()}`}
      disabled={disabled}
      {...props}
    >
      <span
        className={DAY_ITEM_VARIANTS({ theme, transition })}
        aria-disabled={disabled}
      >
        {date.getDate()}
      </span>
    </button>
  );
};
