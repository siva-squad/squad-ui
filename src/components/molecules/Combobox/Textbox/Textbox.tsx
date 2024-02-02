import type { TextboxProps } from "./type";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { TEXTBOX_CLASS_NAME, TEXTBOX_ICON_CLASS_NAME } from "./const";

export const Textbox = ({ size, labelText, onClick, disabled }: TextboxProps) => {
  return (
    <label className="relative">
      <button
        onClick={onClick}
        className="absolute inset-y-0 right-0 flex items-center pr-3"
        tabIndex={-1}
        disabled={disabled}
      >
        <ChevronDownIcon className={TEXTBOX_ICON_CLASS_NAME({ disabled })} />
        <span className="sr-only">{labelText}</span>
      </button>
      <input
        type="text"
        className={TEXTBOX_CLASS_NAME({ size, disabled })}
        placeholder="選択してください"
        disabled={disabled}
      />
    </label>
  );
};
