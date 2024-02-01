import clsx from "clsx";
import type { TextboxProps } from "./type";

export const Textbox = ({}: TextboxProps) => {
  return (
    <input
      type="text"
      className={clsx(
        "rounded-lg border border-gray-light bg-white p-4 text-sm leading-none outline-none w-full",
        "ring-offset-2 focus:text-black focus:ring-1 focus:ring-primary-600",
        "disabled:cursor-not-allowed disabled:text-gray",
      )}
      placeholder="選択してください"
    />
  );
};
