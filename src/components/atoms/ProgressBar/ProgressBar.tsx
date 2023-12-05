import { PROGRESS_BAR_WRAPPER_CLASS_NAME, PROGRESS_BAR_CLASS_NAME } from "./const";
import { ProgressBarProps } from "./type";

export const ProgressBar = ({ size, color, value = 0 }: ProgressBarProps) => {
  const progressValue = Math.max(0, Math.min(100, value));

  return (
    <div className={PROGRESS_BAR_WRAPPER_CLASS_NAME({ size })}>
      <div
        className={PROGRESS_BAR_CLASS_NAME({ color, size })}
        style={{ width: `${progressValue}%` }}
        data-testid="progress-bar"
      ></div>
    </div>
  );
};
