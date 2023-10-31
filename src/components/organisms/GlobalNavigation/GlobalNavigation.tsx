import { forwardRef, useState } from "react";
import clsx from "clsx";
import { Logo } from "../../../assets/logo";
import { GlobalAccount } from "../GlobalAccount";
import type { GlobalNavigationProps } from "./type";

// TODO: PRマージ後、ListItemで置換
type ListItemSlotProps = { onClick?: () => void };
const ListItemSlot = ({ onClick }: ListItemSlotProps) => {
  return (
    <a
      {...(!onClick && { href: "" })}
      className="break-keep p-2 text-s leading-none"
      onClick={onClick}
      role={onClick ? "button" : ""}
    >
      テキスト
    </a>
  );
};

// TODO: ListItemPRマージ後、MenuListで置換
type MenuListType = "beyond" | "connection" | "account";
type RichMenuStateType = { id?: string; isOpen: boolean };
type MenuListSlotProps = {
  type: MenuListType;
  isOpen: boolean;
  onOpenChange?: () => void;
  absolute?: boolean;
};

// TODO: ListItemのType利用
const GLOBAL_NAVIGATION: { id: string; title: string; icon?: string; key: MenuListType }[] = [
  { id: "1", icon: "", title: "テキスト", key: "account" },
  { id: "2", icon: "", title: "Dev", key: "beyond" },
];

export const MenuListSlot = forwardRef<HTMLDivElement, MenuListSlotProps>(({ type }, ref) => {
  return (
    <div
      className="flex flex-col gap-y-4"
      ref={ref}
    >
      {GLOBAL_NAVIGATION.filter((nav) => nav.key === type).map((nav) => (
        <ListItemSlot key={`${nav.id}-${type}`} />
      ))}
    </div>
  );
});

MenuListSlot.displayName = "MenuListSlot";

export const RichMenu = ({ absolute = false, isOpen = false, type }: MenuListSlotProps) => {
  if (!isOpen) return <></>;

  return (
    <div
      className={clsx("flex w-fit gap-x-4 rounded-lg bg-white p-4 shadow-06", {
        "absolute mt-3": absolute,
      })}
    >
      <MenuListSlot
        type={type}
        isOpen={isOpen}
      />
      {/* RichMenuList */}
    </div>
  );
};

export const GlobalNavigation = ({ items }: GlobalNavigationProps) => {
  const [richMenuState, setRichMenuState] = useState<RichMenuStateType>({
    id: "",
    isOpen: false,
  });

  // TODO: richMenuStateの構造検討
  // TODO: richMenuStateのモーダル外クリック対応
  return (
    <header className="flex items-center gap-x-6 border-b border-gray-light bg-white px-4 py-2">
      <Logo
        height={40}
        width={40}
      />
      <nav className="mr-auto">
        <ul className="flex items-center gap-x-2">
          {items?.map((item) => (
            <li
              key={item.id}
              className="relative"
            >
              <ListItemSlot onClick={() => setRichMenuState({ isOpen: true, id: item.id })} />
              <RichMenu
                isOpen={richMenuState.id === item.id && richMenuState.isOpen}
                type="account"
                absolute
              />
            </li>
          ))}
        </ul>
      </nav>
      <GlobalAccount
        userId="1"
        userName="田中 太郎"
        teamName="Squad beyondチーム"
      />
    </header>
  );
};
