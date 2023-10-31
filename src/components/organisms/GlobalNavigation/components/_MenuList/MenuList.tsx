import { forwardRef } from "react";
import { ListItem } from "@atoms/ListItem";
import { MenuListType } from "../../type";
import { MENU_NAVIGATION } from "./const";

export const MenuListSlot = forwardRef<HTMLDivElement, { type: MenuListType }>(({ type }, ref) => {
  return (
    <div
      className="flex flex-col gap-y-4"
      ref={ref}
    >
      {MENU_NAVIGATION.filter((nav) => nav.groupId === type).map((nav) =>
        nav.items.map((item) => (
          <ListItem
            key={item.id}
            size="large"
            {...item}
          />
        )),
      )}
    </div>
  );
});

MenuListSlot.displayName = "MenuListSlot";
