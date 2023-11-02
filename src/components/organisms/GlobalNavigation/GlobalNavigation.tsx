import { useRef, useState } from "react";
import { Logo } from "@assets/logo";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { useScreenSize } from "@hooks/useScreenSize";
import { GlobalAccount } from "../GlobalAccount";
import { RichMenu } from "../RichMenu";
import { NavigationListUI } from "./components/NavigationListUI";
import { useRichMenuDialog } from "./hooks";
import type { GlobalNavigationProps } from "./type";

export const LogoUI = () => {
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
};

export const GlobalNavigation = ({ items }: GlobalNavigationProps) => {
  const { noCloseRefs, richMenuState, toggleDialog } = useRichMenuDialog();
  const headerRef = useRef<HTMLElement>(null);
  const { isDesktop, isMobile } = useScreenSize();

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <>
      <header
        className="flex items-center gap-x-6 border-b border-gray-light bg-white px-4 py-2"
        ref={headerRef}
      >
        {isMobile && (
          <button onClick={() => setIsSidebarOpen(true)}>
            <Bars3Icon
              height={24}
              width={24}
            />
          </button>
        )}
        <LogoUI />
        {isDesktop && (
          <NavigationListUI
            items={items}
            refs={noCloseRefs}
            isRichMenuOpen={(navigationType) =>
              richMenuState.key !== "default" &&
              richMenuState.key === navigationType &&
              richMenuState.isOpen
            }
            onClick={(navigationType) => toggleDialog(navigationType)}
          />
        )}
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
      {isMobile && isSidebarOpen && (
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
          <NavigationListUI
            items={items}
            refs={noCloseRefs}
            isRichMenuOpen={(navigationType) =>
              richMenuState.key !== "default" &&
              richMenuState.key === navigationType &&
              richMenuState.isOpen
            }
            onClick={(navigationType) => toggleDialog(navigationType)}
          />
        </aside>
      )}
    </>
  );
};
