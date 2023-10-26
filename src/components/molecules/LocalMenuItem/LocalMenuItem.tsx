import { useMemo } from "react";
import {
  MENUITEM_CONTAINER_CLASS_NAME,
  MENUITEM_ICON_CLASS_NAME,
  MENUITEM_TITLE_CLASS_NAME,
} from "./const";
import type { LocalMenuItemProps } from "./type";

export const LocalMenuItem = ({
  icon,
  selectedIcon,
  title,
  isDisabled = false,
  isSelected = false,
  onClick,
}: LocalMenuItemProps) => {
  const iconUI = useMemo(() => {
    if (isSelected) {
      return selectedIcon || icon;
    }

    return icon;
  }, [icon, isSelected, selectedIcon]);

  return (
    <button
      className={MENUITEM_CONTAINER_CLASS_NAME({ isSelected })}
      disabled={isDisabled}
      onClick={onClick}
    >
      {icon && <span className={MENUITEM_ICON_CLASS_NAME({ isSelected })}>{iconUI}</span>}
      <span className={MENUITEM_TITLE_CLASS_NAME({ isSelected })}>{title}</span>
    </button>
  );
};
