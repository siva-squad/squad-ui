import { useCallback, useRef, useState } from "react";
import { Logo } from "@assets/logo";
import { ListItem } from "@atoms/ListItem";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { useScreenSize } from "@hooks/useScreenSize";
import { GlobalAccount } from "../GlobalAccount";
import { RichMenu } from "../RichMenu";
import { NAVIGATION_LIST_CLASS_NAME } from "./const";
import { useRichMenuDialog } from "./hooks";
import type { GlobalNavigationProps } from "./type";

export const GlobalNavigation = ({ items }: GlobalNavigationProps) => {
  const { noCloseRefs, richMenuState, toggleDialog } = useRichMenuDialog();
  const headerRef = useRef<HTMLHeadElement>(null);
  const { media, isPC, isSP } = useScreenSize();

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const LogoUI = useCallback(() => {
    return (
      <div>
        <a href="/">
          <Logo
            height={40}
            width={40}
          />
        </a>
      </div>
    );
  }, []);

  const NavigationUI = useCallback(() => {
    return (
      <nav>
        <ul className={NAVIGATION_LIST_CLASS_NAME({ media })}>
          {items.map((item, index) => (
            <li key={item.id}>
              <div
                className="relative"
                data-dropdown-id={item.navigationType}
                ref={(el) => (noCloseRefs.current[index] = el)}
              >
                <ListItem
                  title={item.title}
                  hasChevron={item.hasChevron}
                  {...(item.href
                    ? { href: item.href }
                    : { onClick: () => toggleDialog(item.navigationType) })}
                  size="medium"
                />
                <RichMenu
                  isOpen={
                    richMenuState.key !== "default" &&
                    richMenuState.key === item.navigationType &&
                    richMenuState.isOpen
                  }
                  navigationType={item.navigationType}
                  richMenuType={item.richMenuType}
                  absolute
                />
              </div>
            </li>
          ))}
        </ul>
      </nav>
    );
  }, [items, media, noCloseRefs, richMenuState.isOpen, richMenuState.key, toggleDialog]);

  return (
    <>
      <header
        className="flex items-center gap-x-6 border-b border-gray-light bg-white px-4 py-2"
        ref={headerRef}
      >
        {isSP && (
          <button onClick={() => setIsSidebarOpen(true)}>
            <Bars3Icon
              height={24}
              width={24}
            />
          </button>
        )}
        <LogoUI />
        {isPC && <NavigationUI />}
        <div
          className="relative ml-auto"
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
            richMenuType="default"
            absolute
            anchor="right"
          />
        </div>
      </header>
      {isSP && isSidebarOpen && (
        <aside className="absolute left-0 top-0 flex h-full w-60 flex-col border-r border-gray-light bg-white px-4 py-2">
          <div className="flex items-center justify-between">
            <LogoUI />
            <button onClick={() => setIsSidebarOpen(false)}>
              <XMarkIcon
                height={24}
                width={24}
              />
            </button>
          </div>
          <NavigationUI />
        </aside>
      )}
    </>
  );
};
