import { useId } from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

import { SEARCH_INPUT_CLASS_NAME } from "./const";
import type { SearchInputProps } from "./type";

export const SearchInput = ({
  inputSize,
  inputStyle,
  label = "Search",
  ...props
}: SearchInputProps) => {
  const id = useId();

  const placeholder = props.placeholder || "Search";
  return (
    <div
      role="search"
      className="relative"
    >
      <label
        className="absolute inset-y-0 left-0 flex items-center pl-3"
        htmlFor={id}
        aria-label={label}
      >
        <MagnifyingGlassIcon className="h-4 w-4 text-black" />
      </label>
      <input
        id={id}
        type="text"
        placeholder={placeholder}
        className={SEARCH_INPUT_CLASS_NAME({ inputSize, inputStyle })}
        {...props}
      />
    </div>
  );
};
