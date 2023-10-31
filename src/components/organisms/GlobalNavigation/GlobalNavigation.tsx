import { useState } from "react";
import { Logo } from "../../../assets/logo";
import { GlobalAccount } from "../GlobalAccount";
import { ListItem } from "./components/_ListItemSlot";
import { RichMenu } from "./components/_RichMenu";
import type { GlobalNavigationProps, RichMenuStateType } from "./type";

export const GlobalNavigation = ({ items }: GlobalNavigationProps) => {
  const [richMenuState, setRichMenuState] = useState<RichMenuStateType>({
    key: "",
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
              <ListItem
                onClick={() => setRichMenuState({ isOpen: true, key: item.key })}
                title={item.title || ""}
              />
              <RichMenu
                isOpen={!!item.key && richMenuState.key === item.key && richMenuState.isOpen}
                navigationType={item.key}
                type={item.richMenuType}
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
