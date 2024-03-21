import { ReactNode } from "react";
import { ListItemProps } from "@components/atoms/ListItem/type";
import { MENU_NAVIGATION_KEYS } from "./const";
import { MergeType } from "@/src/utils/type-utils";

export type MenuKindKey = (typeof MENU_NAVIGATION_KEYS)[number];
export type MenuListTypeKey = "beyond" | "connection" | "account" | "default";

export type MenuListProps = {
  navigationType: MenuListTypeKey;
  onMouseEnter: (id: MenuKindKey) => void;
  onClick?: (id: MenuKindKey) => void;
};

export type MenuNavigationItemProps = Omit<ListItemProps, "id"> & { id: MenuKindKey };
export type MenuNavigationType = {
  groupId: MenuListTypeKey;
  items: MergeType<MenuNavigationItemProps, { children?: ReactNode }>[];
}[];
