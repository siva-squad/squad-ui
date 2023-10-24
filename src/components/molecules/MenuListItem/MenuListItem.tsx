import { useMemo } from "react";
import React from "react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import {
  MENU_LIST_ITEM_CONTAINER_CLASS_NAME,
  MENU_LIST_ITEM_DESCRIPTION_CLASS_NAME,
  MENU_LIST_ITEM_ICON_CLASS_NAME,
  MENU_LIST_ITEM_TEXT_CLASS_NAME,
} from "./const";
import type { MenuListItemProps } from "./type";

export const MenuListItem = React.forwardRef<HTMLAnchorElement, MenuListItemProps>(
  (
    {
      type = "dropdown",
      chevron = true,
      description,
      children,
      icon,
      selectedIcon,
      disabled,
      selected = false,
      onClick,
      href,
    },
    ref,
  ) => {
    const iconUI = useMemo(() => {
      if (selected) {
        return selectedIcon || icon;
      }

      return icon;
    }, [icon, selected, selectedIcon]);

    const commonProps = useMemo(() => {
      return {
        className: MENU_LIST_ITEM_CONTAINER_CLASS_NAME({ selected, type }),
        disabled,
        onClick,
      };
    }, [disabled, onClick, selected, type]);

    const commonChildren = useMemo(() => {
      return (
        <>
          {icon && <span className={MENU_LIST_ITEM_ICON_CLASS_NAME({ selected })}>{iconUI}</span>}
          <div className="flex flex-col items-start">
            <span className={MENU_LIST_ITEM_TEXT_CLASS_NAME({ selected })}>{children}</span>
            <span className={MENU_LIST_ITEM_DESCRIPTION_CLASS_NAME({ selected })}>
              {description}
            </span>
          </div>
          {chevron && <ChevronDownIcon className="h-4 w-4 text-gray-dark" />}
        </>
      );
    }, [chevron, children, description, icon, iconUI, selected]);

    if (href)
      return (
        <a
          href={href}
          ref={ref}
          {...commonProps}
        >
          {commonChildren}
        </a>
      );

    return <button {...commonProps}>{commonChildren}</button>;
  },
);

MenuListItem.displayName = "MenuListItem";
