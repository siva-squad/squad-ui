import { ListItemProps } from "@atoms/ListItem/type";

type RichMenuProps = {
  key: MenuListType;
  richMenuType: RichMenuType;
};

type Merge<T, U> = T & U;

export type GlobalNavigationProps = {
  items: Merge<ListItemProps, RichMenuProps>[]; // ListItemProps[] + modalKeys
  selectedId: string;
  onChangeSelectedId?: (id: string) => void;
};

export type MenuListType = "beyond" | "connection" | "account" | "";
export type RichMenuType = "default" | "list" | "description";
export type RichMenuStateType = { key: MenuListType; isOpen: boolean };
