import { useEffect, useState } from "react";
import { Option } from "../Listbox/type";

type UseKeyboardProps = {
  options: Option[];
  handleSelect: (option: Option) => void;
};

export const useKeyboard = ({ options, handleSelect }: UseKeyboardProps) => {
  const [isListOpen, setIsListOpen] = useState(false);
  const [isFocus, setIsFocus] = useState(false);
  const [visualFocusIndex, setVisualFocusIndex] = useState<number | null>(null);

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
          setIsListOpen(true);
          setVisualFocusIndex(lastIndex);
          return;
        case "Down":
        case "ArrowDown":
          event.preventDefault();
          const firstIndex = 0;
          setIsListOpen(true);
          setVisualFocusIndex(firstIndex);
          return;
        case "Enter":
        case "Escape":
          event.preventDefault();
          handleSelect({ name: "", id: "" });
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
          if (visualFocusIndex !== null) {
            const option = options[visualFocusIndex];
            handleSelect(option);
          }
          setIsListOpen(false);
          return;
        case "Escape":
          event.preventDefault();
          if (isListOpen) {
            setIsListOpen(false);
          }
          return;
        default:
          setVisualFocusIndex(null);
      }
    };

    if (!isListOpen) {
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
  }, [isFocus, visualFocusIndex, isListOpen]);

  return {
    visualFocusIndex,
    setIsFocus,
    setVisualFocusIndex,
    isFocus,
    setIsListOpen,
    isListOpen,
  };
};
