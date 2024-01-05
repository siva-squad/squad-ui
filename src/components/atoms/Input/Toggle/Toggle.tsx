import { forwardRef } from "react";
import { CheckIcon, XMarkIcon } from "@heroicons/react/24/outline";

import {
  TOGGLE_CIRCLE_CLASS_NAME,
  TOGGLE_CONTAINER_CLASS_NAME,
  TOGGLE_ICON_CLASS_NAME,
} from "./const";
import type { ToggleProps } from "./type";

export const Toggle = forwardRef<HTMLInputElement, ToggleProps>(
  ({ value, disabled, onToggle, size = "normal" }, ref) => {
    const iconClassName = TOGGLE_ICON_CLASS_NAME({ isValidValue: value, disabled });

    return (
      <label
        className={TOGGLE_CONTAINER_CLASS_NAME({ disabled, isValidValue: value })}
        aria-disabled={disabled}
      >
        <input
          type="checkbox"
          className="absolute h-0 w-0 opacity-0"
          checked={value}
          disabled={disabled}
          onChange={onToggle}
          ref={ref}
        />
        <span className={TOGGLE_CIRCLE_CLASS_NAME({ isValidValue: value })}>
          {value ? (
            <CheckIcon className={iconClassName} />
          ) : (
            <XMarkIcon className={iconClassName} />
          )}
        </span>
      </label>
    );
  },
);

Toggle.displayName = "Toggle";
