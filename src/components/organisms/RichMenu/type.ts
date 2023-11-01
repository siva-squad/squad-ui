import type { MenuListTypeKey } from "@components/molecules/MenuList";

export type RichMenuTypeKey = "default" | "list" | "description";

export type RichMenuProps = {
  richMenuType: RichMenuTypeKey;
  navigationType: MenuListTypeKey;
  isOpen?: boolean;
  onOpenChange?: () => void;
  absolute?: boolean;
  anchor?: "right" | "left";
  maxHeight?: string;
};
