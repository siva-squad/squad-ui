import { useId, useRef, useState } from "react";
import { Listbox } from "./Listbox";
import { Textbox } from "./Textbox";
import type { ComboboxProps } from "./type";
import { RequiredBadge } from "@components/atoms/RequiredBadge";
import { useKeyboard } from "./hooks";

export const Combobox = ({
  options,
  listName,
  isRequired,
  badgeText,
  disabled = false,
  placeholder = "選択してください",
  size = "normal",
}: ComboboxProps) => {
  const [showList, setShowList] = useState(false);
  const [value, setValue] = useState("");
  const [selectedElementId, setSelectedElementId] = useState("");
  const inputLabelId = useId();
  const inputRef = useRef<HTMLInputElement>(null);
  const { visualFocusIndex, setIsFocus, setVisualFocusIndex } = useKeyboard({
    options,
    showList,
    setShowList,
    setValue,
    setSelectedElementId,
  });

  return (
    <div className="grid gap-2">
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
          setShowList(!showList);
          if (!!inputRef.current) {
            inputRef.current.focus();
          }
        }}
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        disabled={disabled}
        inputLabelId={inputLabelId}
        isListOpen={showList}
        placeholder={placeholder}
        ref={inputRef}
      />

      {showList && (
        <Listbox
          visualFocusIndex={visualFocusIndex}
          selectedElementId={selectedElementId}
          onClick={({ id, name }) => {
            setSelectedElementId(id);
            setValue(name);
            setIsFocus(true);
            if (!!inputRef.current) {
              inputRef.current.focus();
            }
          }}
          options={options}
          listName={listName}
          onMouseOver={(index) => setVisualFocusIndex(index)}
        />
      )}
    </div>
  );
};
