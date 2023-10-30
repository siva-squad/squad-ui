import { useMemo } from "react";
import React from "react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import {
  LIST_ITEM_CONTAINER_CLASS_NAME,
  LIST_ITEM_DESCRIPTION_CLASS_NAME,
  LIST_ITEM_ICON_CLASS_NAME,
  LIST_ITEM_TEXT_CLASS_NAME,
} from "./const";
import type { ListItemProps } from "./type";

export const ListItem = React.forwardRef<HTMLAnchorElement | HTMLButtonElement, ListItemProps>(
  (
    {
      hasChevron = true,
      description,
      title,
      icon,
      selectedIcon,
      isDisabled,
      isSelected = false,
      onClick,
      href,
      size,
      id,
    },
    ref,
  ) => {
    const Action = href ? "a" : "button";

    const iconUI = useMemo(() => {
      if (isSelected) {
        return selectedIcon || icon;
      }

      return icon;
    }, [icon, isSelected, selectedIcon]);

    return (
      <Action
        className={LIST_ITEM_CONTAINER_CLASS_NAME({ isSelected })}
        disabled={isDisabled}
        onClick={onClick}
        ref={ref as React.RefObject<HTMLAnchorElement> & React.RefObject<HTMLButtonElement>}
        {...(href && { href })}
        id={id}
      >
        {icon && <span className={LIST_ITEM_ICON_CLASS_NAME({ isSelected, size })}>{iconUI}</span>}
        <span className="flex flex-col items-start">
          <span className={LIST_ITEM_TEXT_CLASS_NAME({ isSelected, size })}>{title}</span>
          {description && size === "large" && (
            <span className={LIST_ITEM_DESCRIPTION_CLASS_NAME({ isSelected })}>{description}</span>
          )}
        </span>
        {hasChevron && <ChevronDownIcon className="h-4 w-4 text-gray-dark" />}
      </Action>
    );
  },
);

ListItem.displayName = "ListItem";
