import { useCallback, useEffect, useRef, useState } from "react";
import { Logo } from "../../../assets/logo";
import { ListItem } from "../../atoms/ListItem";
import { GlobalAccount } from "../GlobalAccount";
import { RichMenu } from "./components/_RichMenu";
import type { GlobalNavigationProps, RichMenuStateType } from "./type";

export const GlobalNavigation = ({ items }: GlobalNavigationProps) => {
  const [richMenuState, setRichMenuState] = useState<RichMenuStateType>({
    key: "",
    isOpen: false,
  });

  const noCloseRefs = useRef<(HTMLDivElement | null)[]>([]);
  const currentTarget = noCloseRefs.current.find(
    (ref) => ref?.dataset.dropdownId === richMenuState.key,
  );

  const handleClickOutside = useCallback(
    (e: MouseEvent) => {
      const isChild = currentTarget?.contains(e.target as Node);

      if (!isChild) {
        setRichMenuState({ isOpen: false, key: "" });
      }
    },
    [currentTarget],
  );

  useEffect(() => {
    const el = noCloseRefs.current;

    if (!el.length) return;

    document.addEventListener("click", handleClickOutside);

    return () => document.removeEventListener("click", handleClickOutside);
  }, [handleClickOutside, richMenuState.key]);

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
                  onClick={() => setRichMenuState({ isOpen: true, key: item.key })}
                  hasChevron={item.hasChevron}
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
        data-dropdown-id={"account"}
        ref={(el) => noCloseRefs.current.push(el)}
      >
        <GlobalAccount
          userId="1"
          userName="田中 太郎"
          teamName="Squad beyondチーム"
          onClick={() => setRichMenuState({ isOpen: true, key: "account" })}
        />
        <RichMenu
          isOpen={richMenuState.key === "account" && richMenuState.isOpen}
          navigationType={"account"}
          type={"default"}
          absolute
        />
      </div>
    </header>
  );
};
