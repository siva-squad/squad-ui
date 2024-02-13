import { DayItemProps } from "@atoms/DayItem/type";
import { checkIsSameDay } from "@/src/utils/date";

export const useCalendarCellTheme = (value: Date | null) => {
  const generateTheme = (date: Date): DayItemProps["theme"] => {
    const now = new Date();

    if (!value) {
      return "default";
    }

    if (checkIsSameDay(value, date)) {
      return "selected";
    }
    if (checkIsSameDay(now, date)) {
      return "today";
    }
    return "default";
  };

  return { generateTheme };
};
