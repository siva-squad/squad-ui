import { ListItemProps } from "@atoms/ListItem/type";
import { MergeType } from "@/src/utils/type-utils";

type RichMenuProps = {
  key: MenuListType;
  richMenuType: RichMenuType;
};

export type GlobalNavigationProps = {
  items: MergeType<ListItemProps, RichMenuProps>[]; // ListItemProps[] + modalKeys
  selectedId: string;
  onChangeSelectedId?: (id: string) => void;
};

export type MenuListType = "beyond" | "connection" | "account" | "";
export type RichMenuType = "default" | "list" | "description";
export type RichMenuStateType = { key: MenuListType; isOpen: boolean };
