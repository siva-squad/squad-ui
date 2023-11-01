import type { MenuListType } from "@components/molecules/MenuList";

export type RichMenuTypeKey = "default" | "list" | "description";

export type RichMenuProps = {
  key: MenuListType;
  richMenuType: RichMenuTypeKey;
  navigationType: MenuListType;
  type: RichMenuTypeKey;
  isOpen: boolean;
  onOpenChange?: () => void;
  absolute?: boolean;
  anchor?: "right" | "left";
  maxHeight?: string;
};
