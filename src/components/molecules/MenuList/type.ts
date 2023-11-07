import { MenuKindKey } from "./const";

export type MenuListTypeKey = "beyond" | "connection" | "account" | "default";
export type MenuListProps = {
  navigationType: MenuListTypeKey;
  onMouseEnter?: (id: MenuKindKey) => void;
  onMouseLeave?: (id: MenuKindKey) => void;
};
