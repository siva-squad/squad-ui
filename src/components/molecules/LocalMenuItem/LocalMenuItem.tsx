import {
  MENUITEM_CONTAINER_CLASS_NAME,
  MENUITEM_ICON_CLASS_NAME,
  MENUITEM_TITLE_CLASS_NAME,
} from "./const";
import type { LocalMenuItemProps } from "./type";

export const LocalMenuItem = ({
  icon,
  title,
  isDisabled = false,
  isSelected = false,
  onClick,
}: LocalMenuItemProps) => {
  return (
    <button
      className={MENUITEM_CONTAINER_CLASS_NAME({ isSelected })}
      disabled={isDisabled}
      onClick={onClick}
    >
      {icon && <span className={MENUITEM_ICON_CLASS_NAME({ isSelected })}>{icon}</span>}
      <span className={MENUITEM_TITLE_CLASS_NAME({ isSelected })}>{title}</span>
    </button>
  );
};
