import { RichMenuTypeKey } from "@components/organisms/RichMenu/type";

export type MenuListType = "beyond" | "connection" | "account" | "default";

export type MenuListProps = {
  navigationType: MenuListType;
  type: RichMenuTypeKey;
  isOpen: boolean;
  onOpenChange?: () => void;
  absolute?: boolean;
  anchor?: "right" | "left";
  maxHeight?: string;
};
