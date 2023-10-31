import { RichMenuType } from "@components/organisms/RichMenu/type";

export type MenuListType = "beyond" | "connection" | "account" | "";

export type MenuListProps = {
  navigationType: MenuListType;
  type: RichMenuType;
  isOpen: boolean;
  onOpenChange?: () => void;
  absolute?: boolean;
};
