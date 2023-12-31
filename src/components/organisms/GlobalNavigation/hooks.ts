import { useCallback, useEffect, useRef, useState } from "react";
import { MenuListTypeKey } from "@components/molecules/MenuList";

export type RichMenuStateType = { key: MenuListTypeKey; isOpen: boolean };

export const useRichMenuDialog = () => {
  const [richMenuState, setRichMenuState] = useState<RichMenuStateType>({
    key: "default",
    isOpen: false,
  });

  const noCloseRefs = useRef<(HTMLDivElement | null)[]>([]);
  const currentTarget = noCloseRefs.current.find(
    (ref) => ref?.dataset.dropdownId === richMenuState.key,
  );

  const manageDialog = useCallback((key: MenuListTypeKey, isOpen: boolean) => {
    setRichMenuState((prev) => ({ ...prev, key, isOpen }));
  }, []);

  const handleClickOutside = useCallback(
    (e: MouseEvent) => {
      const isChild = currentTarget?.contains(e.target as Node);

      if (!isChild) {
        manageDialog("default", false);
      }
    },
    [currentTarget, manageDialog],
  );

  const toggleDialog = useCallback(
    (key: MenuListTypeKey) => {
      if (key === richMenuState.key && richMenuState.isOpen) {
        manageDialog(key, false);
      } else {
        manageDialog(key, true);
      }
    },
    [manageDialog, richMenuState.isOpen, richMenuState.key],
  );

  useEffect(() => {
    const el = noCloseRefs.current;

    if (!el.length) return;

    document.addEventListener("click", handleClickOutside);

    return () => document.removeEventListener("click", handleClickOutside);
  }, [handleClickOutside, richMenuState.key]);

  return { noCloseRefs, richMenuState, manageDialog, toggleDialog };
};
