import { ListItemProps } from "@components/atoms/ListItem/type";

export type MenuListTypeKey = "beyond" | "connection" | "account" | "default";
export type MenuListProps = {
  navigationType: MenuListTypeKey;
} & Pick<ListItemProps, "onMouseEnter" | "onMouseLeave">;
