import { useId } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
import clsx from "clsx";
import { Button } from "../Button";
import { useCalendarSlider } from "../DatePicker/hooks";
import { DayItem } from "../DayItem";
import { DAY_ITEM_SIZE } from "../DayItem/const";
import { WeekItem } from "../WeekItem";
import { useCalendarCellTheme, useCalendarSelector } from "./hooks";

import { DateRangePickerProps } from "./type";
import { checkEnableDate, getCalendarDates } from "./util";
import { startOfTheDay } from "@/src/utils/date";

export const DateRangePicker = ({
  value,
  shortcuts = [],
  changeType,
  title,
  minDate,
  maxDate,
  onChange,
}: DateRangePickerProps) => {
  const id = useId();
  const { generateTheme } = useCalendarCellTheme(value);
  const { changeDate } = useCalendarSelector({
    value,
    changeType,
  });
  const calendar = useCalendarSlider({
    width: DAY_ITEM_SIZE.width * 7,
    defaultMonth: value[changeType],
  });
  const calendarTitle = useCalendarSlider({
    width: 240,
    defaultMonth: value[changeType],
  });

  const formattedShortcuts = shortcuts.map((shortcut) => ({
    ...shortcut,
    value: startOfTheDay(shortcut.value),
  }));

  const handleSelectDate = (date: Date) => {
    onChange(changeDate(date));
  };

  const handleSelectShortcut = (date: Date) => {
    onChange(changeDate(date));
    calendar.skipTo(date);
    calendarTitle.skipTo(date);
  };

  const handleSlideNext = () => {
    calendar.slideNext();
    calendarTitle.slideNext();
  };

  const handleSlidePrev = () => {
    calendar.slidePrev();
    calendarTitle.slidePrev();
  };

  return (
    <>
      {/** width(382px) = DAY_ITEM_SIZE.width(50px) * 7 + padding(16px) * 2 */}
      <div className="flex w-[382px] flex-col items-stretch rounded-3xl bg-white px-4 py-8 shadow-04">
        <div className="grid grid-cols-[1fr_242px_1fr]">
          <button
            type="button"
            disabled={calendar.isMoving}
            onClick={() => handleSlidePrev()}
          >
            <ChevronLeftIcon className="h-6 w-6 text-black" />
          </button>
          <span className="block text-center font-bold">
            {calendarTitle.render((date) => (
              <div className="text-center font-bold">
                {title ? title(date) : `${date.getFullYear()}年 ${date.getMonth() + 1}月`}
              </div>
            ))}
          </span>
          <div className="flex justify-end">
            <button
              type="button"
              disabled={calendar.isMoving}
              onClick={() => handleSlideNext()}
            >
              <ChevronRightIcon className="h-6 w-6 text-black" />
            </button>
          </div>
        </div>
        <div className="mt-9 flex">
          {["日", "月", "火", "水", "木", "金", "土"].map((day) => (
            <WeekItem key={`date-range-picker-week-item-${day}`}>{day}</WeekItem>
          ))}
        </div>
        <div className="flex flex-col">
          {calendar.render((date, condition) => {
            const weeks = getCalendarDates(date);
            const isCurrentMonth = date === condition.currentMonth;
            // Note: 表示されていない月の高さに引っ張られないように、高さを調整
            const height = isCurrentMonth
              ? DAY_ITEM_SIZE.height * weeks.length
              : DAY_ITEM_SIZE.height * 4;

            return (
              <div
                className={clsx(
                  "flex flex-col transition-all",
                  isCurrentMonth ? "overflow-hidden" : "overflow-visible",
                )}
                style={{ height }}
              >
                {weeks.map((week) => (
                  <div
                    className="z-[1] flex"
                    key={`date-range-picker-week-${id}-${week[0].toDateString()}`}
                  >
                    {week.map((day) => (
                      <DayItem
                        key={`date-range-picker-day-item-${id}-${day.toDateString()}`}
                        theme={generateTheme(day)}
                        // Note: 遷移時はアニメーションを無効化
                        transition={!condition.isMoving}
                        date={day}
                        disabled={!checkEnableDate(day, minDate, maxDate)}
                        onClick={handleSelectDate}
                      />
                    ))}
                  </div>
                ))}
              </div>
            );
          })}
        </div>
        <div className="hidden-scrollbar mt-8 flex gap-3 overflow-x-scroll">
          {formattedShortcuts.map((shortcut) => (
            <Button
              key={`date-range-picker-shortcut-${shortcut.label}`}
              theme="primary"
              variant="outline"
              size="small"
              disabled={shortcut.disabled}
              onClick={() => handleSelectShortcut(shortcut.value)}
            >
              <div className="min-w-[36px] whitespace-pre">{shortcut.label}</div>
            </Button>
          ))}
        </div>
      </div>
    </>
  );
};
