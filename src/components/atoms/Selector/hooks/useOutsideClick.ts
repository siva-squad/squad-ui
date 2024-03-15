import { useEffect } from "react";

export const useOutsideClick = (ref: React.RefObject<HTMLElement>, callback: () => void) => {
  const handleClickOutside = (event: MouseEvent) => {
    if (ref.current && !ref.current.contains(event.target as Node)) {
      event.stopPropagation();
      callback();
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  });
};
