import { useId, useState } from "react";
import { Listbox } from "./Listbox";
import { Textbox } from "./Textbox";
import type { ComboboxProps } from "./type";
import { RequiredBadge } from "@components/atoms/RequiredBadge";
import { useKeyboard, useOutsideClick } from "./hooks";
import { Option } from "./Listbox/type";

export const Combobox = ({
  options,
  listName,
  isRequired,
  badgeText,
  disabled = false,
  placeholder = "選択してください",
  size = "normal",
  description,
  labelText,
  onSelect,
}: ComboboxProps) => {
  const inputLabelId = useId();
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState<Option>({ name: "", id: "" });

  const handleSelect = (option: Option) => {
    setQuery(option.name);
    setSelected(option);
    setIsFocus(true);
    setIsListOpen(false);

    onSelect(option);
  };

  const filteredOptions =
    query.length > 0
      ? options.filter((option) => option.name.toLowerCase().startsWith(query.toLowerCase()))
      : options;

  const { visualFocusIndex, setIsFocus, setVisualFocusIndex, isFocus, setIsListOpen, isListOpen } =
    useKeyboard({
      options: filteredOptions,
      handleSelect,
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
      <label
        className="flex items-center text-sm font-medium leading-tight gap-x-2"
        htmlFor={inputLabelId}
      >
        {labelText}
        <RequiredBadge
          isRequired={isRequired}
          optionalText={badgeText}
          requiredText={badgeText}
        />
      </label>
      <p className="text-xs leading-normal text-gray-dark">{description}</p>
      <Textbox
        value={query}
        onChange={(event) => setQuery(event.target.value)}
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
          selectedElementId={selected.id}
          onClick={(option) => handleSelect(option)}
          options={filteredOptions}
          listName={listName}
          onMouseOver={(index) => setVisualFocusIndex(index)}
        />
      )}
    </div>
  );
};
