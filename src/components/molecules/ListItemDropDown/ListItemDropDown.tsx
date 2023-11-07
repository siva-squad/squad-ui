import { ReactNode, useState } from "react";
import { ListItem } from "@components/atoms/ListItem";
import { ListItemProps } from "@components/atoms/ListItem/type";
import { MergeType } from "@/src/utils/type-utils";

export const ListItemDropDown = ({
  children,
  title,
  id,
  hasChevron,
  theme,
  isDisabled,
  isSelected,
  icon,
  selectedIcon,
  size,
  description,
  onMouseEnter,
  onMouseLeave,
}: MergeType<ListItemProps, { children: ReactNode }>) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <ListItem
        {...{
          title,
          id,
          hasChevron,
          theme,
          isDisabled,
          isSelected,
          icon,
          selectedIcon,
          onMouseEnter,
          onMouseLeave,
          ...(size === "large" ? { size, description } : { size }),
        }}
        onClick={() => setIsOpen((prev) => !prev)}
      />
      {isOpen && <>{children}</>}
    </div>
  );
};
