import { useEffect, useMemo, useRef, useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import clsx from "clsx";
import {
  ICON_CLASS_NAME,
  LABEL_CLASS_NAME,
  SELECTOR_BUTTON_CLASS_NAME,
  SELECTOR_WRAPPER_CLASS_NAME,
} from "../const";
import { useOutsideClick } from "../hooks";
import { SelectorList } from "../SelectorList";

import type { BaseOptionValue, OptionType, SelectorProps } from "../type";

export const ForSearch = <OptionValue extends BaseOptionValue>({
  size,
  options,
  value,
  placeholder,
  disabled,
  onSelect,
  listHeight,
  defaultValue,
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

  const handleButtonClick = (event: React.MouseEvent) => {
    event.stopPropagation();
    setIsOpen((prevIsOpen) => !prevIsOpen);
  };

  const onClick = (option: OptionType<OptionValue>) => {
    setKeyword(option.label);
    onSelect(option.value);
    setIsOpen(false);
  };
  const [keyword, setKeyword] = useState<string>(activeLabel || placeholder);
  const [keywordForSearch, setKeywordForSearch] = useState<string>("");
  const search = (_keyword: string) => options.filter((option) => option.label.includes(_keyword));

  useEffect(() => {
    if (options.find((option) => option.label === keyword)) return;
    setKeyword(activeLabel);
  }, [isOpen]);

  return (
    <div
      ref={wrapperRef}
      className={SELECTOR_WRAPPER_CLASS_NAME({ size })}
    >
      <div
        className={SELECTOR_BUTTON_CLASS_NAME({ size, disabled })}
        aria-disabled={disabled ? "true" : "false"}
      >
        <input
          type="text"
          onFocus={() => {
            setKeywordForSearch("");
            setIsOpen(true);
          }}
          onChange={(e) => {
            setKeyword(e.target.value);
            setKeywordForSearch(e.target.value);
          }}
          value={keyword}
          className={clsx(
            LABEL_CLASS_NAME({ size, disabled, isActive: !!activeLabel }),
            "w-full text-start",
            "focus:outline-none",
          )}
        />
        <button onClick={handleButtonClick}>
          <ChevronDownIcon
            className={clsx(
              ICON_CLASS_NAME({ disabled }),
              "transition-all duration-200",
              isOpen && "rotate-180",
            )}
          />
        </button>
      </div>
      {isOpen && (
        <SelectorList
          listHeight={listHeight}
          options={search(keywordForSearch)}
          value={value}
          onClick={onClick}
          rect={wrapperRef.current?.getBoundingClientRect()}
          defaultValue={defaultValue}
        />
      )}
    </div>
  );
};
