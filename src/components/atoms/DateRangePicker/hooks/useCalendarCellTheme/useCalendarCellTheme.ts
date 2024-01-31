import { DayItemProps } from "../../../DayItem/type";

export const useCalendarCellTheme = ({ from, to }: { from?: Date; to?: Date }) => {
  const checkSameDate = (prev: Date, next: Date) => {
    return (
      prev.getFullYear() === next.getFullYear() &&
      prev.getMonth() === next.getMonth() &&
      prev.getDate() === next.getDate()
    );
  };

  const checkInRange = (prev: Date, from: Date, to: Date) => {
    return from < prev && prev < to;
  };

  const generateTheme = (date: Date): DayItemProps["theme"] => {
    const now = new Date();

    if (from && checkSameDate(from, date)) {
      return to ? "selectedFrom" : "selected";
    }
    if (to && checkSameDate(to, date)) {
      return from ? "selectedTo" : "selected";
    }
    if (from && to && checkInRange(date, from, to)) {
      return "range";
    }
    if (checkSameDate(now, date)) {
      return "today";
    }
  };

  return { generateTheme };
};
