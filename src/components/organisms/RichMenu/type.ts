import type { MenuListTypeKey } from "@components/molecules/MenuList";
import { RichMenuListProps } from "@components/molecules/RichMenuList/type";

export type RichMenuProps = {
  navigationType: MenuListTypeKey;
  isOpen?: boolean;
  onOpenChange?: () => void;
  absolute?: boolean;
  anchor?: "right" | "left";
  groups?: RichMenuListProps["groups"];
};
