import type { MenuListTypeKey } from "@components/molecules/MenuList";

export type RichMenuTypeKey = "default" | "list" | "description";

export type RichMenuProps = {
  key: MenuListTypeKey;
  richMenuType: RichMenuTypeKey;
  navigationType: MenuListTypeKey;
  type: RichMenuTypeKey;
  isOpen: boolean;
  onOpenChange?: () => void;
  absolute?: boolean;
  anchor?: "right" | "left";
  maxHeight?: string;
};
