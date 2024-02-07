import { useId, useState } from "react";
import { Listbox } from "./Listbox";
import { Textbox } from "./Textbox";
import type { ComboboxProps } from "./type";
import { RequiredBadge } from "@components/atoms/RequiredBadge";
import { useKeyboard, useOutsideClick } from "./hooks";

export const Combobox = ({
  options,
  listName,
  isRequired,
  badgeText,
  disabled = false,
  placeholder = "選択してください",
  size = "normal",
}: ComboboxProps) => {
  const inputLabelId = useId();
  const [value, setValue] = useState("");
  const {
    visualFocusIndex,
    setIsFocus,
    setVisualFocusIndex,
    isFocus,
    selectedElementId,
    setSelectedElementId,
    setIsListOpen,
    isListOpen,
  } = useKeyboard({
    options,
    setValue,
  });
  const ref = useOutsideClick(() => {
    setIsFocus(false);
    setIsListOpen(false);
  });

  return (
    <div
      className="grid gap-2"
      ref={ref}
    >
      <label htmlFor={inputLabelId}>Label Text </label>
      <RequiredBadge
        isRequired={isRequired}
        optionalText={badgeText}
        requiredText={badgeText}
      />
      <p>Some description</p>
      <Textbox
        value={value}
        onChange={(event) => setValue(event.target.value)}
        size={size}
        listName={listName}
        onClick={() => {
          setIsFocus(true);
          setIsListOpen(!isListOpen);
        }}
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        disabled={disabled}
        inputLabelId={inputLabelId}
        isListOpen={isListOpen}
        placeholder={placeholder}
        isFocus={isFocus}
      />

      {isListOpen && (
        <Listbox
          visualFocusIndex={visualFocusIndex}
          selectedElementId={selectedElementId}
          onClick={({ id, name }) => {
            setSelectedElementId(id);
            setValue(name);
            setIsFocus(true);
          }}
          options={options}
          listName={listName}
          onMouseOver={(index) => setVisualFocusIndex(index)}
        />
      )}
    </div>
  );
};
