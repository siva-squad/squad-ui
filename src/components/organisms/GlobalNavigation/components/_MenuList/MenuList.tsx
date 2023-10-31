import { forwardRef } from "react";
import { ListItem } from "../_ListItemSlot";

// TODO: ListItemPRマージ後、MenuListで置換
type MenuListType = "beyond" | "connection" | "account";

// TODO: ListItemのType利用
const GLOBAL_NAVIGATION: { id: string; title: string; icon?: string; key: MenuListType }[] = [
  { id: "1", icon: "", title: "テキスト", key: "account" },
  { id: "2", icon: "", title: "Dev", key: "beyond" },
];

export const MenuListSlot = forwardRef<HTMLDivElement, { type: MenuListType }>(({ type }, ref) => {
  return (
    <div
      className="flex flex-col gap-y-4"
      ref={ref}
    >
      {GLOBAL_NAVIGATION.filter((nav) => nav.key === type).map((nav) => (
        <ListItem key={`${nav.id}-${type}`} />
      ))}
    </div>
  );
});

MenuListSlot.displayName = "MenuListSlot";
