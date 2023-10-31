import type { MenuListType } from "@components/molecules/MenuList";

export type RichMenuType = "default" | "list" | "description";

export type RichMenuProps = {
  key: MenuListType;
  richMenuType: RichMenuType;
};
