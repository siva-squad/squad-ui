import { forwardRef } from "react";
import { ListItem } from "@atoms/ListItem";
import { ListItemProps } from "@components/atoms/ListItem/type";
import { ListItemDropDown } from "../ListItemDropDown";
import { MENU_NAVIGATION } from "./const";
import { MenuListProps } from "./type";

export const MenuList = forwardRef<HTMLElement, MenuListProps>(
  ({ navigationType, onMouseEnter, onClick }, ref) => {
    const [menuNavigationItems] = MENU_NAVIGATION({ onClick }).filter(
      (nav) => nav.groupId === navigationType,
    );

    return (
      <nav
        className="flex shrink-0 flex-col gap-y-4 overflow-auto p-4"
        ref={ref}
      >
        {menuNavigationItems.items.map((item) => {
          if (item.children) {
            return (
              <ListItemDropDown
                {...({ ...item, onClick: () => onClick && onClick(item.id) } as ListItemProps)}
                onMouseEnter={() => onMouseEnter(item.id)}
                key={item.id}
              >
                {item.children}
              </ListItemDropDown>
            );
          }

          return (
            <ListItem
              {...({ ...item, onClick: () => onClick && onClick(item.id) } as ListItemProps)}
              key={item.id}
              onMouseEnter={() => onMouseEnter(item.id)}
              size="large"
            />
          );
        })}
      </nav>
    );
  },
);

MenuList.displayName = "MenuListSlot";
