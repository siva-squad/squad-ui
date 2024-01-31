import type { DateRangePickerProps, DateRangePickerValue } from "../../type";
import { startOfToday } from "@/src/utils/date";

export const useCalendarSelector = ({
  value: { from, to },
  changeType,
}: {
  value: DateRangePickerValue;
  changeType: DateRangePickerProps["changeType"];
}) => {
  const changeDate = (value: Date) => {
    if (!changeType) return { from, to };
    const diffWithFrom = value.getTime() - (from?.getTime() ?? 0);
    const diffWithTo = (to?.getTime() ?? 0) - value.getTime();

    switch (changeType) {
      case "from": {
        // Note: 既に選択された日付を選択
        if (diffWithFrom === 0) {
          return { from: undefined, to };
        }

        // // Note: to よりも後に設定
        if (!!to && to <= value) {
          return { from: value, to: undefined };
        }

        return { from: value, to };
      }
      case "to": {
        // // Note: 既に選択された日付を選択
        if (diffWithTo === 0) {
          return { from, to: undefined };
        }

        // Note: from よりも前に設定
        if (!!from && from >= value) {
          return { from: undefined, to: value };
        }

        return { from, to: value };
      }
    }
  };

  const changeToToday = () => {
    if (!changeType) return { from, to };
    const now = startOfToday();

    switch (changeType) {
      case "from": {
        if (!!to && to < now) {
          return { from: now, to: undefined };
        }
        return { from: now, to };
      }
      case "to": {
        if (!!from && from > now) {
          return { from: undefined, to: now };
        }
        return { from, to: now };
      }
    }
  };

  const resetvalue = () => {
    return { from: undefined, to: undefined };
  };

  return { changeDate, changeToToday, resetvalue };
};
