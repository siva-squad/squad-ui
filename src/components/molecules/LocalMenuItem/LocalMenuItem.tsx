import { useMemo } from "react";
import React from "react";
import {
  MENUITEM_CONTAINER_CLASS_NAME,
  MENUITEM_ICON_CLASS_NAME,
  MENUITEM_TITLE_CLASS_NAME,
} from "./const";
import type { LocalMenuItemProps } from "./type";

export const LocalMenuItem = React.forwardRef<HTMLAnchorElement, LocalMenuItemProps>(
  ({ icon, selectedIcon, title, isDisabled = false, isSelected = false, href }, ref) => {
    const iconUI = useMemo(() => {
      if (isSelected) {
        return selectedIcon || icon;
      }

      return icon;
    }, [icon, isSelected, selectedIcon]);

    return (
      <a
        className={MENUITEM_CONTAINER_CLASS_NAME({ isSelected, isDisabled })}
        ref={ref}
        {...(!isDisabled && { href })}
      >
        {icon && (
          <span className={MENUITEM_ICON_CLASS_NAME({ isSelected, isDisabled })}>{iconUI}</span>
        )}
        <span className={MENUITEM_TITLE_CLASS_NAME({ isSelected, isDisabled })}>{title}</span>
      </a>
    );
  },
);

LocalMenuItem.displayName = "LocalMenuItem";
