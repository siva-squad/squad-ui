import { useEffect, useState } from "react";
import { Option } from "../Listbox/type";

type UseKeyboardProps = {
  options: Option[];
  showList: boolean;
  setShowList: (boolean: boolean) => void;
  setValue: (string: string) => void;
  setSelectedElementId: (string: string) => void;
};

export const useKeyboard = ({
  options,
  showList,
  setShowList,
  setValue,
  setSelectedElementId,
}: UseKeyboardProps) => {
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
            const { name, id } = options[visualFocusIndex];
            setValue(name);
            setSelectedElementId(id);
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

  return { visualFocusIndex, setIsFocus, setVisualFocusIndex, isFocus };
};
