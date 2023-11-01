import { ReactNode, useMemo, useState } from "react";
import { ListItem } from "@components/atoms/ListItem";
import { ListItemProps } from "@components/atoms/ListItem/type";
import { MergeType } from "@/src/utils/type-utils";

export const ListItemDropDown = ({
  children,
  title,
  id,
  hasChevron,
  isDangerText,
  isDisabled,
  isSelected,
  icon,
  selectedIcon,
  size,
  description,
}: MergeType<ListItemProps, { children?: ReactNode }>) => {
  const [isOpen, setIsOpen] = useState(false);

  const conditionalProps = useMemo(() => {
    if (size === "large") return { size: "large", description } as const;

    return { size };
  }, [description, size]);

  return (
    <div>
      <ListItem
        {...{
          title,
          id,
          hasChevron,
          isDangerText,
          isDisabled,
          isSelected,
          icon,
          selectedIcon,
          ...conditionalProps,
        }}
        onClick={() => setIsOpen((prev) => !prev)}
      />
      {isOpen && <>{children}</>}
    </div>
  );
};
