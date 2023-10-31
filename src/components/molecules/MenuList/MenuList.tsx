import { forwardRef } from "react";
import { ListItem } from "@atoms/ListItem";
import { ListItemDropDown } from "../ListItemDropDown";
import { MENU_NAVIGATION } from "./const";
import { MenuListType } from "./type";

export const MenuList = forwardRef<HTMLDivElement, { type: MenuListType }>(({ type }, ref) => {
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

MenuList.displayName = "MenuListSlot";
