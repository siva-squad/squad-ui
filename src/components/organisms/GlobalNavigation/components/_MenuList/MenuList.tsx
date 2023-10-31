import { forwardRef } from "react";
import { MenuListType } from "../../type";
import { ListItem } from "../_ListItemSlot";
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
            key={`${item.id}-${type}`}
            title={item.title}
            description={item.description}
          />
        )),
      )}
    </div>
  );
});

MenuListSlot.displayName = "MenuListSlot";
