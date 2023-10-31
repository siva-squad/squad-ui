import { Logo } from "@assets/logo";
import { ListItem } from "@atoms/ListItem";
import { GlobalAccount } from "../GlobalAccount";
import { RichMenu } from "../RichMenu";
import { useRichMenuDialog } from "./hooks";
import type { GlobalNavigationProps } from "./type";

export const GlobalNavigation = ({ items }: GlobalNavigationProps) => {
  const { noCloseRefs, manageDialog, richMenuState } = useRichMenuDialog();

  return (
    <header className="flex items-center gap-x-6 border-b border-gray-light bg-white px-4 py-2">
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
          {items?.map((item, index) => (
            <li key={item.id}>
              <div
                className="relative"
                data-dropdown-id={item.key}
                ref={(el) => (noCloseRefs.current[index] = el)}
              >
                <ListItem
                  title={item.title}
                  onClick={() => manageDialog(item.key, true)}
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
          onClick={() => manageDialog("account", true)}
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
