import type { TextboxProps } from "./type";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { TEXTBOX_CLASS_NAME, TEXTBOX_ICON_CLASS_NAME } from "./const";

export const Textbox = ({
  size,
  onClick,
  disabled,
  onChange,
  onFocus,
  onBlur,
  value,
  isListOpen,
  inputLabelId,
  placeholder,
  listName,
}: TextboxProps) => {
  return (
    <div className="relative">
      <input
        role="combobox"
        aria-autocomplete="list"
        aria-controls={listName}
        aria-expanded={isListOpen}
        id={inputLabelId}
        onChange={onChange}
        value={value}
        type="text"
        className={TEXTBOX_CLASS_NAME({ size, disabled })}
        placeholder={placeholder}
        disabled={disabled}
        onFocus={onFocus}
        onBlur={onBlur}
      />
      <button
        onClick={onClick}
        className="absolute inset-y-0 right-0 flex items-center pr-3"
        tabIndex={-1}
        disabled={disabled}
        aria-label={listName}
        aria-controls={listName}
        aria-expanded={isListOpen}
      >
        <ChevronDownIcon className={TEXTBOX_ICON_CLASS_NAME({ disabled })} />
      </button>
    </div>
  );
};
