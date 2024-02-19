import { forwardRef } from "react";
import { CheckIcon } from "@heroicons/react/24/outline";
import clsx from "clsx";
import type { CheckboxProps } from "./type";

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  ({ checked, children, value, onChange, disabled }, ref) => {
    return (
      <label className="relative inline-flex cursor-pointer items-center gap-x-2">
        <input
          type="checkbox"
          checked={checked}
          disabled={disabled}
          onChange={onChange}
          className={clsx(
            "peer h-4 w-4 cursor-pointer appearance-none rounded-e rounded-s border border-gray-light bg-white",
            "checked:border-primary-600 checked:bg-primary-50 disabled:cursor-not-allowed disabled:bg-gray-light disabled:checked:border-disabled-black",
          )}
          value={value}
          ref={ref}
        />
        <CheckIcon
          width={12}
          height={12}
          className={
            "absolute left-0.5 hidden text-primary-600 peer-checked:inline-block peer-disabled:text-disabled-black"
          }
        />
        {children && <span className="text-s">{children}</span>}
      </label>
    );
  },
);

Checkbox.displayName = "Checkbox";
