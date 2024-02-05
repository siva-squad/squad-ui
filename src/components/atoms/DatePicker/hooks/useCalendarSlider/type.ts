export type UseCalendarSliderCondition = {
  currentMonth: Date;
  position: number;
  smooth: boolean;
  isMoving: boolean;
};

export type UseCalendarSliderProps = {
  duration?: number;
  defaultMonth?: Date;
  width?: number;
};
