import { ReactNode, useState } from "react";
import { ListItem } from "@components/atoms/ListItem";
import { ListItemProps } from "@components/atoms/ListItem/type";
import { MergeType } from "@/src/utils/type-utils";

export const ListItemDropDown = ({
  children,
  href,
  target,
  ...itemProps
}: MergeType<ListItemProps, { children?: ReactNode }>) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <ListItem
        {...itemProps}
        onClick={() => setIsOpen((prev) => !prev)}
        data-ts-avoid-href={href}
        data-ts-avoid-target={target}
      />
      {isOpen && <>{children}</>}
    </div>
  );
};
