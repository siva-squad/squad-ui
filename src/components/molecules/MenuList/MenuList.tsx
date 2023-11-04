import { forwardRef } from "react";
import { ListItem } from "@atoms/ListItem";
import { ListItemDropDown } from "../ListItemDropDown";
import { MENU_NAVIGATION } from "./const";
import { MenuListProps } from "./type";

export const MenuList = forwardRef<HTMLDivElement, MenuListProps>(({ navigationType }, ref) => {
  const [menuNavigationItems] = MENU_NAVIGATION.filter((nav) => nav.groupId === navigationType);

  return (
    <nav
      className="flex flex-col gap-y-4 overflow-auto p-4"
      ref={ref}
    >
      {menuNavigationItems.items.map((item) => {
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
      })}
    </nav>
  );
});

MenuList.displayName = "MenuListSlot";
