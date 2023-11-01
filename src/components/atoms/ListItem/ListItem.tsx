import { useMemo, useState } from "react";
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
      target,
      isDangerText,
    },
    ref,
  ) => {
    const [localSelected, setLocalSelected] = useState(isSelected);

    const Action = href ? "a" : "button";

    const iconUI = useMemo(() => {
      if (isSelected || localSelected) {
        return selectedIcon || icon;
      }

      return icon;
    }, [icon, isSelected, localSelected, selectedIcon]);

    return (
      <Action
        className={LIST_ITEM_CONTAINER_CLASS_NAME({ isSelected })}
        disabled={isDisabled}
        onClick={onClick}
        onFocus={() => setLocalSelected(true)}
        onBlur={() => setLocalSelected(false)}
        ref={ref as React.RefObject<HTMLAnchorElement> & React.RefObject<HTMLButtonElement>}
        id={id}
        {...(href && { href, target })}
      >
        {icon && (
          <span className={LIST_ITEM_ICON_CLASS_NAME({ isSelected: isSelected, size })}>
            {iconUI}
          </span>
        )}
        <span className="flex flex-1 flex-col items-start">
          <span className={LIST_ITEM_TEXT_CLASS_NAME({ isSelected, size, isDangerText })}>
            {title}
          </span>
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
