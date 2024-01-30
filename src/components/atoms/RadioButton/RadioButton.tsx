import { forwardRef } from "react";
import clsx from "clsx";
import type { RadioButtonProps } from "./type";

export const RadioButton = forwardRef<HTMLInputElement, RadioButtonProps>(
  ({ children, name, onChange, value, checked, disabled }, ref) => {
    return (
      <label className="relative inline-flex cursor-pointer items-center gap-x-2">
        <input
          name={name}
          type="radio"
          onChange={onChange}
          checked={checked}
          className={clsx(
            "peer h-4 w-4 cursor-pointer appearance-none rounded-full border border-gray-light",
            "checked:border-primary-600 checked:bg-primary-50 disabled:cursor-not-allowed disabled:border-gray disabled:bg-gray-light",
          )}
          value={value}
          aria-checked={checked}
          ref={ref}
          disabled={disabled}
        />
        <div className="absolute left-1 hidden h-2 w-2 rounded-full bg-primary-600 peer-checked:block peer-disabled:bg-gray"></div>
        <span className="font-noto-sans-cjk-jp text-s">{children}</span>
      </label>
    );
  },
);

RadioButton.displayName = "RadioButton";
