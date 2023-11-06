import { useRef, useState } from "react";
import { BrandLogo } from "@components/molecules/BrandLogo";
import { Bars3Icon } from "@heroicons/react/24/outline";
import { useScreenSize } from "@hooks/useScreenSize";
import { GlobalAccount } from "../GlobalAccount";
import { GlobalSidebar } from "../GlobalSidebar";
import { useSidebar } from "../GlobalSidebar/hooks";
import { RichMenu } from "../RichMenu";
import { NavigationListUI } from "./components/NavigationListUI";
import { useRichMenuDialog } from "./hooks";
import type { GlobalNavigationProps } from "./type";

export const GlobalNavigation = ({ items }: GlobalNavigationProps) => {
  const { isDesktop, isMobile } = useScreenSize();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const headerRef = useRef<HTMLElement>(null);
  const { noCloseRefs, richMenuState, toggleDialog } = useRichMenuDialog();
  const { sidebarRef, triggerRef } = useSidebar({ onClose: () => setIsSidebarOpen(false) });

  return (
    <>
      <header
        className="flex items-center gap-x-6 border-b border-gray-light bg-white px-4 py-2"
        ref={headerRef}
      >
        {isMobile && (
          <button
            onClick={() => setIsSidebarOpen(true)}
            ref={triggerRef}
          >
            <Bars3Icon
              height={24}
              width={24}
            />
          </button>
        )}
        <BrandLogo />
        {isDesktop && <NavigationListUI items={items} />}
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
      <GlobalSidebar
        items={items}
        isOpen={isMobile && isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
        ref={sidebarRef}
      />
    </>
  );
};
