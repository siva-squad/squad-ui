import { useCallback, useId, useMemo, useRef, useState } from "react";
import clsx from "clsx";
import { UseCalendarSliderCondition, UseCalendarSliderProps } from "./type";
import { firstDayOfMonth, subMonth, addMonth } from "@/src/utils/date";

export const useCalendarSlider = ({
  duration = 300,
  defaultMonth,
  width = 0,
}: UseCalendarSliderProps) => {
  const [condition, setCondition] = useState<UseCalendarSliderCondition>({
    currentMonth: firstDayOfMonth(defaultMonth ?? new Date()),
    position: 1,
    smooth: false,
    isMoving: false,
  });
  const id = useId();
  const containerRef = useRef<HTMLDivElement>(null);

  const sliderMonths = useMemo(
    () => [
      subMonth(condition.currentMonth, 1),
      condition.currentMonth,
      addMonth(condition.currentMonth, 1),
    ],
    [condition.currentMonth],
  );

  const slideNext = useCallback(() => {
    setCondition((prev) => ({
      ...prev,
      position: prev.position + 1,
      smooth: true,
      isMoving: true,
    }));
    setTimeout(() => {
      setCondition((prev) => ({
        ...prev,
        position: 1,
        currentMonth: sliderMonths[2],
        smooth: false,
        isMoving: false,
      }));
    }, duration);
  }, [duration, sliderMonths]);

  const slidePrev = useCallback(() => {
    setCondition((prev) => ({
      ...prev,
      position: prev.position - 1,
      smooth: true,
      isMoving: true,
    }));
    setTimeout(() => {
      setCondition((prev) => ({
        ...prev,
        position: 1,
        currentMonth: sliderMonths[0],
        smooth: false,
        isMoving: false,
      }));
    }, duration);
  }, [duration, sliderMonths]);

  const skipTo = useCallback((month: Date) => {
    setCondition((prev) => ({
      ...prev,
      position: 1,
      currentMonth: firstDayOfMonth(month),
      smooth: false,
    }));
  }, []);

  const translation = useMemo(() => {
    return condition.position * width * -1;
  }, [condition.position, width]);

  const render = useCallback(
    (generator: (month: Date, condition: UseCalendarSliderCondition) => React.ReactNode) => {
      return (
        <div
          className={clsx("w-full overflow-hidden")}
          ref={containerRef}
        >
          <div
            className={clsx("flex")}
            style={{
              translate: translation,
              transitionDuration: condition.smooth ? `${duration}ms` : "",
            }}
          >
            {sliderMonths.map((month, i) => (
              <div
                key={`slider-${id}-${i}`}
                className="shrink-0"
                style={{ width: `${width}px` }}
              >
                {generator(month, condition)}
              </div>
            ))}
          </div>
        </div>
      );
    },
    [condition, duration, id, sliderMonths, translation, width],
  );

  return {
    slideNext,
    slidePrev,
    skipTo,
    render,
    ...condition,
  };
};
