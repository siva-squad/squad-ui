import { forwardRef } from "react";
import { CheckIcon } from "@heroicons/react/24/outline";
import type { CheckboxProps } from "./type";

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  ({ checked, children, value, onChange }, ref) => {
    return (
      <label className="relative inline-flex cursor-pointer items-center gap-x-2">
        <input
          type="checkbox"
          checked={checked}
          onChange={onChange}
          className={
            "peer h-4 w-4 cursor-pointer appearance-none rounded-e rounded-s border border-gray-light bg-white checked:border-primary-600 checked:bg-primary-50"
          }
          value={value}
          ref={ref}
        />
        <CheckIcon
          width={12}
          height={12}
          className={"absolute left-0.5 hidden text-primary-600 peer-checked:inline-block"}
        />
        {children && <span className="font-noto-sans-cjk-jp text-s">{children}</span>}
      </label>
    );
  },
);

Checkbox.displayName = "Checkbox";
