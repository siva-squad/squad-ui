import { CheckIcon } from "@heroicons/react/24/outline";
import type { CheckboxProps } from "./type";

export const Checkbox = ({ checked, children, value, onChange }: CheckboxProps) => {
  return (
    <label className="relative inline-flex cursor-pointer items-center gap-x-2">
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        className={
          "peer h-4 w-4 cursor-pointer appearance-none rounded-e rounded-s border border-gray-light checked:border-primary-600 checked:bg-primary-50"
        }
        value={value}
      />
      <CheckIcon
        width={12}
        height={12}
        className={"absolute left-0.5 hidden text-primary-600 peer-checked:inline-block"}
      />
      <span className="font-noto-sans-cjk-jp text-s">{children}</span>
    </label>
  );
};
