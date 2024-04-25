import { useMemo, useRef, useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import {
  ICON_CLASS_NAME,
  LABEL_CLASS_NAME,
  SELECTOR_BUTTON_CLASS_NAME,
  SELECTOR_WRAPPER_CLASS_NAME,
} from "./const";
import { ForSearch } from "./ForSearch";
import { useOutsideClick } from "./hooks";
import { SelectorList } from "./SelectorList";

import type { BaseOptionValue, OptionType, SelectorProps } from "./type";

export const Selector = <OptionValue extends BaseOptionValue>({
  size,
  options,
  value,
  placeholder,
  disabled,
  onSelect,
  listHeight,
  defaultValue,
  enableSearch = false,
}: SelectorProps<OptionValue>) => {
  const [isOpen, setIsOpen] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const activeLabel = useMemo(
    () =>
      options.find((option) => option.value === value)?.label ??
      options.find((option) => option.value === defaultValue)?.label ??
      placeholder,
    [options, value, placeholder, defaultValue],
  );

  useOutsideClick(wrapperRef, () => setIsOpen(false));

  if (enableSearch)
    return (
      <ForSearch
        {...{ size, options, value, placeholder, disabled, onSelect, listHeight, defaultValue }}
      />
    );

  const handleButtonClick = (event: React.MouseEvent) => {
    event.stopPropagation();
    setIsOpen((prevIsOpen) => !prevIsOpen);
  };

  const onClick = (option: OptionType<OptionValue>) => {
    onSelect(option.value);
    setIsOpen(false);
  };

  return (
    <div
      ref={wrapperRef}
      className={SELECTOR_WRAPPER_CLASS_NAME({ size })}
    >
      <button
        className={SELECTOR_BUTTON_CLASS_NAME({ size, disabled })}
        disabled={disabled}
        aria-disabled={disabled ? "true" : "false"}
        onClick={handleButtonClick}
        type="button"
      >
        <span className={LABEL_CLASS_NAME({ size, disabled, isActive: !!activeLabel })}>
          {activeLabel || placeholder}
        </span>
        <ChevronDownIcon className={ICON_CLASS_NAME({ disabled })} />
      </button>
      {isOpen && (
        <SelectorList
          listHeight={listHeight}
          options={options}
          value={value}
          onClick={onClick}
          rect={wrapperRef.current?.getBoundingClientRect()}
          defaultValue={defaultValue}
        />
      )}
    </div>
  );
};
