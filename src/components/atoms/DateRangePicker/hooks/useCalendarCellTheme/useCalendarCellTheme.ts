import { DayItemProps } from "@atoms/DayItem/type";
import { checkIsSameDay } from "@/src/utils/date";

export const useCalendarCellTheme = ({ from, to }: { from?: Date; to?: Date }) => {
  const checkInRange = (prev: Date, from: Date, to: Date) => {
    return from < prev && prev < to;
  };

  const generateTheme = (date: Date): DayItemProps["theme"] => {
    const now = new Date();

    if (from && checkIsSameDay(from, date)) {
      return to ? "selectedFrom" : "selected";
    }
    if (to && checkIsSameDay(to, date)) {
      return from ? "selectedTo" : "selected";
    }
    if (from && to && checkInRange(date, from, to)) {
      return "range";
    }
    if (checkIsSameDay(now, date)) {
      return "today";
    }
  };

  return { generateTheme };
};
