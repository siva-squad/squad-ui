import type { MenuListType } from "@components/molecules/MenuList";

export type RichMenuTypeKey = "default" | "list" | "description";

export type RichMenuProps = {
  key: MenuListType;
  richMenuType: RichMenuTypeKey;
};
