import { RichMenuType } from "@components/organisms/RichMenu/type";

export type MenuListType = "beyond" | "connection" | "account" | "default";

export type MenuListProps = {
  navigationType: MenuListType;
  type: RichMenuType;
  isOpen: boolean;
  onOpenChange?: () => void;
  absolute?: boolean;
  maxHeight?: string;
};
