import { useCallback, useEffect, useRef, useState } from "react";
import { MenuListType } from "@components/molecules/MenuList";

export type RichMenuStateType = { key: MenuListType; isOpen: boolean };

export const useRichMenuDialog = () => {
  const [richMenuState, setRichMenuState] = useState<RichMenuStateType>({
    key: "",
    isOpen: false,
  });

  const noCloseRefs = useRef<(HTMLDivElement | null)[]>([]);
  const currentTarget = noCloseRefs.current.find(
    (ref) => ref?.dataset.dropdownId === richMenuState.key,
  );

  const handleClickOutside = useCallback(
    (e: MouseEvent) => {
      const isChild = currentTarget?.contains(e.target as Node);

      if (!isChild) {
        setRichMenuState({ isOpen: false, key: "" });
      }
    },
    [currentTarget],
  );

  const manageDialog = useCallback((key: MenuListType, isOpen: boolean) => {
    setRichMenuState((prev) => ({ ...prev, key, isOpen }));
  }, []);

  useEffect(() => {
    const el = noCloseRefs.current;

    if (!el.length) return;

    document.addEventListener("click", handleClickOutside);

    return () => document.removeEventListener("click", handleClickOutside);
  }, [handleClickOutside, richMenuState.key]);

  return { noCloseRefs, richMenuState, manageDialog };
};