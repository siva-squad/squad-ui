import { useEffect, useId, useRef, useState } from "react";
import { Listbox } from "./Listbox";
import { Textbox } from "./Textbox";
import type { ComboboxProps } from "./type";
import { RequiredBadge } from "@components/atoms/RequiredBadge";

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
  const [isFocus, setIsFocus] = useState(false);
  const [visualFocusIndex, setVisualFocusIndex] = useState<number | null>(null);
  const inputLabelId = useId();

  useEffect(() => {
    if (!isFocus) {
      return;
    }

    const handleClosedListKey = (event: KeyboardEvent) => {
      const key = event.key;

      switch (key) {
        case "Up":
        case "ArrowUp":
          event.preventDefault();
          const lastIndex = options.length - 1;
          setShowList(true);
          setVisualFocusIndex(lastIndex);
          return;
        case "Down":
        case "ArrowDown":
          event.preventDefault();
          const firstIndex = 0;
          setShowList(true);
          setVisualFocusIndex(firstIndex);
          return;
        case "Enter":
        case "Escape":
          event.preventDefault();
          setValue("");
          return;
      }
    };

    const handleOpenedListKey = (event: KeyboardEvent) => {
      const key = event.key;

      switch (key) {
        case "Up":
        case "ArrowUp":
          event.preventDefault();
          const previousIndex =
            visualFocusIndex === 0 || visualFocusIndex === null
              ? options.length - 1
              : visualFocusIndex - 1;
          setVisualFocusIndex(previousIndex);
          return;
        case "Down":
        case "ArrowDown":
          event.preventDefault();
          const nextIndex =
            visualFocusIndex === options.length - 1 || visualFocusIndex === null
              ? 0
              : visualFocusIndex + 1;
          setVisualFocusIndex(nextIndex);
          return;
        case "Enter":
          event.preventDefault();
          if (!(visualFocusIndex === null)) {
            const currentValue = options[visualFocusIndex].name;
            setValue(currentValue);
          }
          setShowList(false);
          return;
        case "Escape":
          event.preventDefault();
          if (showList) {
            setShowList(false);
          }
          return;
        default:
          setVisualFocusIndex(null);
      }
    };

    if (!showList) {
      document.addEventListener("keydown", handleClosedListKey);

      return () => {
        document.removeEventListener("keydown", handleClosedListKey);
      };
    } else {
      document.addEventListener("keydown", handleOpenedListKey);

      return () => {
        document.removeEventListener("keydown", handleOpenedListKey);
      };
    }
  }, [isFocus, visualFocusIndex, showList]);

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
        onClick={() => setShowList(!showList)}
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        disabled={disabled}
        inputLabelId={inputLabelId}
        isListOpen={showList}
        placeholder={placeholder}
      />

      {showList && (
        <Listbox
          visualFocusIndex={visualFocusIndex}
          selectedElementId={selectedElementId}
          onClick={({ id, name }) => {
            setSelectedElementId(id);
            setValue(name);
          }}
          options={options}
          listName={listName}
        />
      )}
    </div>
  );
};
