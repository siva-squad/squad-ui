import { ReactNode, forwardRef, useState } from "react";
import { ListItem } from "@atoms/ListItem";
import { ListItemProps } from "@components/atoms/ListItem/type";
import { MenuListType } from "../../type";
import { MENU_NAVIGATION } from "./const";
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

export const MenuListSlot = forwardRef<HTMLDivElement, { type: MenuListType }>(({ type }, ref) => {
  return (
    <div
      className="flex flex-col gap-y-4"
      ref={ref}
    >
      {MENU_NAVIGATION.filter((nav) => nav.groupId === type).map((nav) =>
        nav.items.map((item) => {
          if (item.children) {
            return (
              <ListItemDropDown
                {...item}
                key={item.id}
              >
                {item.children}
              </ListItemDropDown>
            );
          }

          return (
            <ListItem
              key={item.id}
              size="large"
              {...item}
            />
          );
        }),
      )}
    </div>
  );
});

MenuListSlot.displayName = "MenuListSlot";
