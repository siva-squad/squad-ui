import { useMemo } from "react";
import React from "react";
import {
  MENUITEM_CONTAINER_CLASS_NAME,
  MENUITEM_ICON_CLASS_NAME,
  MENUITEM_TITLE_CLASS_NAME,
} from "./const";
import type { LocalMenuItemProps } from "./type";

export const LocalMenuItem = React.forwardRef<HTMLButtonElement, LocalMenuItemProps>(
  ({ icon, selectedIcon, title, isDisabled = false, isSelected = false, onClick }, ref) => {
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
        ref={ref}
      >
        {icon && <span className={MENUITEM_ICON_CLASS_NAME({ isSelected })}>{iconUI}</span>}
        <span className={MENUITEM_TITLE_CLASS_NAME({ isSelected })}>{title}</span>
      </button>
    );
  },
);

LocalMenuItem.displayName = "LocalMenuItem";
