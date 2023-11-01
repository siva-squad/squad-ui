import { useRef } from "react";
import { Logo } from "@assets/logo";
import { ListItem } from "@atoms/ListItem";
import { GlobalAccount } from "../GlobalAccount";
import { RichMenu } from "../RichMenu";
import { useRichMenuDialog } from "./hooks";
import type { GlobalNavigationProps } from "./type";

export const GlobalNavigation = ({ items }: GlobalNavigationProps) => {
  const { noCloseRefs, richMenuState, toggleDialog } = useRichMenuDialog();
  const headerRef = useRef<HTMLHeadElement>(null);

  return (
    <header
      className="flex items-center gap-x-6 border-b border-gray-light bg-white px-4 py-2"
      ref={headerRef}
    >
      <div>
        <a href="/">
          <Logo
            height={40}
            width={40}
          />
        </a>
      </div>
      <nav className="mr-auto">
        <ul className="flex items-center gap-x-2">
          {items.map((item, index) => (
            <li key={item.id}>
              <div
                className="relative"
                data-dropdown-id={item.key}
                ref={(el) => (noCloseRefs.current[index] = el)}
              >
                <ListItem
                  title={item.title}
                  onClick={() => toggleDialog(item.key)}
                  hasChevron={item.hasChevron}
                  size="medium"
                />
                <RichMenu
                  isOpen={!!item.key && richMenuState.key === item.key && richMenuState.isOpen}
                  navigationType={item.key}
                  type={item.richMenuType}
                  absolute
                />
              </div>
            </li>
          ))}
        </ul>
      </nav>
      <div
        className="relative"
        data-dropdown-id="account"
        ref={(el) => noCloseRefs.current.push(el)}
      >
        <GlobalAccount
          userId="1"
          userName="田中 太郎"
          teamName="Squad beyondチーム"
          onClick={() => toggleDialog("account")}
        />
        <RichMenu
          isOpen={richMenuState.key === "account" && richMenuState.isOpen}
          navigationType="account"
          type="default"
          absolute
        />
      </div>
    </header>
  );
};
