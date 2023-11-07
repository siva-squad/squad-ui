import type { MenuListTypeKey } from "@components/molecules/MenuList";

export type RichMenuProps = {
  navigationType: MenuListTypeKey;
  isOpen?: boolean;
  onOpenChange?: () => void;
  absolute?: boolean;
  anchor?: "right" | "left";
  maxHeight?: string;
};
