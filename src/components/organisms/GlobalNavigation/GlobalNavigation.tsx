import { useMemo, useRef } from "react";
import { Logo } from "@assets/logo";
import { ListItem } from "@atoms/ListItem";
import { GlobalAccount } from "../GlobalAccount";
import { RichMenu } from "../RichMenu";
import { NAVIGATION_LIST_CLASS_NAME } from "./const";
import { useRichMenuDialog } from "./hooks";
import type { GlobalNavigationProps } from "./type";
import { useScreenSize } from "@/src/hooks/useScreenSize";

export const GlobalNavigation = ({ items }: GlobalNavigationProps) => {
  const { noCloseRefs, richMenuState, toggleDialog } = useRichMenuDialog();
  const headerRef = useRef<HTMLHeadElement>(null);

  const { width: screenWidth } = useScreenSize();
  const media = screenWidth > 480 ? "pc" : "sp";

  const logoUI = useMemo(() => {
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

  const navigationUI = useMemo(() => {
    return (
      <nav>
        <ul className={NAVIGATION_LIST_CLASS_NAME({ media })}>
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
                  isOpen={
                    item.key !== "default" && richMenuState.key === item.key && richMenuState.isOpen
                  }
                  navigationType={item.key}
                  type={item.richMenuType}
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
        {logoUI}
        {screenWidth > 480 && navigationUI}
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
            type="default"
            absolute
            anchor="right"
          />
        </div>
      </header>
      {screenWidth <= 480 && (
        <aside className="absolute left-0 top-0 flex h-full w-60 flex-col border-r border-gray-light bg-white px-4 pb-4 pt-6">
          {/* GlobalSidebar */}
          {logoUI}
          {navigationUI}
        </aside>
      )}
    </>
  );
};
