import { getDateRange } from "@/src/utils/date";

/**
 * 配列を複数配列に分割
 * @return T[][]
 */
const chunk = <T>(arr: T[], size: number) => {
  return Array.from(Array(Math.ceil(arr.length / size))).map((_, i) =>
    arr.slice(i * size, (i + 1) * size),
  );
};

/**
 * カレンダーに表示する日付を週で分割して取得する
 * @return Date[][]
 * */
export const getCalendarDates = (date: Date) => {
  // 次に表示する月の最初と最後の日付を取得
  const nextMonth = {
    from: new Date(date.getFullYear(), date.getMonth(), 1),
    to: new Date(date.getFullYear(), date.getMonth() + 1, 0),
  };

  // カレンダーの最初と最後の日付を取得
  const calendarFrom = new Date(
    nextMonth.from.getFullYear(),
    nextMonth.from.getMonth(),
    1 - nextMonth.from.getDay(),
    0,
    0,
    0,
  );
  const calendarTo = new Date(
    nextMonth.to.getFullYear(),
    nextMonth.to.getMonth() + 1,
    // Note: 日曜日から1引いて土曜日を算出する
    7 - nextMonth.to.getDay() - 1,
    0,
    0,
    0,
  );

  // カレンダーに表示する日付を週で分割して返す
  return chunk(getDateRange(calendarFrom, calendarTo), 7);
};
