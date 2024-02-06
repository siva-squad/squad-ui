import { useId, useState } from "react";
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
  const inputLabelId = useId();

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
        disabled={disabled}
        inputLabelId={inputLabelId}
        isListOpen={showList}
        placeholder={placeholder}
      />

      {showList && (
        <Listbox
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
