import { useRef, useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import {
  ICON_CLASS_NAME,
  LABEL_CLASS_NAME,
  SELECTOR_BUTTON_CLASS_NAME,
  SELECTOR_WRAPPER_CLASS_NAME,
} from "./const";
import { useOutsideClick } from "./hooks";
import { SelectorList } from "./SelectorList";

import type { OptionType, SelectorProps } from "./type";

export const Selector = ({ size, options, defaultLabel, disabled, onSelect }: SelectorProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLabel, setActiveLabel] = useState<OptionType["label"] | null>(null);
  const [activeId, setActiveId] = useState<OptionType["id"] | null>(null);
  const wrapperRef = useRef(null);

  useOutsideClick(wrapperRef, () => setIsOpen(false));

  const handleButtonClick = (event: React.MouseEvent) => {
    event.stopPropagation();
    setIsOpen((prevIsOpen) => !prevIsOpen);
  };

  const onClick = (option: OptionType) => {
    setActiveLabel(option.label);
    setActiveId(option.id);
    onSelect(option.value);
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
          {activeLabel || defaultLabel}
        </span>
        <ChevronDownIcon className={ICON_CLASS_NAME({ disabled })} />
      </button>
      {isOpen && (
        <SelectorList
          options={options}
          activeId={activeId}
          onClick={onClick}
        />
      )}
    </div>
  );
};
