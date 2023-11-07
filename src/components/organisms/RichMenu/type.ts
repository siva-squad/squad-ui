import type { MenuListTypeKey } from "@components/molecules/MenuList";
import { RichMenuContentsProps } from "./RichMenuContents/type";

export type RichMenuTypeKey = "default" | "list" | "description";

export type RichMenuProps = {
  navigationType: MenuListTypeKey;
  isOpen?: boolean;
  onOpenChange?: () => void;
  absolute?: boolean;
  anchor?: "right" | "left";
} & RichMenuContentsProps;
