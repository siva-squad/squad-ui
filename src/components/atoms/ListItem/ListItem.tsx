import { useMemo, useState } from "react";
import React from "react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import {
  LIST_CHEVRON_CLASS_NAME,
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
      onMouseEnter,
      href,
      size,
      id,
      target,
      theme = "normal",
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
        className={LIST_ITEM_CONTAINER_CLASS_NAME({
          theme,
          isSelected,
          isAnchor: !!href,
          isDisabled,
        })}
        disabled={isDisabled}
        onClick={onClick}
        onFocus={() => setLocalSelected(true)}
        onBlur={() => setLocalSelected(false)}
        ref={ref as React.RefObject<HTMLAnchorElement> & React.RefObject<HTMLButtonElement>}
        id={id}
        onMouseEnter={onMouseEnter}
        {...(href && !isDisabled && { href, target })}
      >
        {icon && (
          <span className={LIST_ITEM_ICON_CLASS_NAME({ size, theme, isSelected, isDisabled })}>
            {iconUI}
          </span>
        )}
        <span className="flex flex-1 flex-col items-start w-full">
          <span className={LIST_ITEM_TEXT_CLASS_NAME({ size, theme, isDisabled })}>{title}</span>
          {description && size === "large" && (
            <span className={LIST_ITEM_DESCRIPTION_CLASS_NAME({ isSelected, theme, isDisabled })}>
              {description}
            </span>
          )}
        </span>
        {hasChevron && <ChevronDownIcon className={LIST_CHEVRON_CLASS_NAME({ isDisabled })} />}
      </Action>
    );
  },
);

ListItem.displayName = "ListItem";
