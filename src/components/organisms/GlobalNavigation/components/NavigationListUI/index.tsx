import { ListItem } from "@components/atoms";
import { MenuListTypeKey } from "@components/molecules";
import { RichMenu } from "@components/organisms/RichMenu";
import { useScreenSize } from "@hooks/useScreenSize";
import { GlobalNavigationProps } from "../../type";
import { NAVIGATION_LIST_CLASS_NAME } from "./const";

type NavigationListUIProps = {
  items: GlobalNavigationProps["items"];
  refs: React.MutableRefObject<(HTMLDivElement | null)[]>;
  isRichMenuOpen: (navigationType: MenuListTypeKey) => boolean;
  onClick: (navigationType: MenuListTypeKey) => void;
};
export const NavigationListUI = ({
  items,
  refs,
  isRichMenuOpen,
  onClick,
}: NavigationListUIProps) => {
  const { media } = useScreenSize();

  return (
    <nav>
      <ul className={NAVIGATION_LIST_CLASS_NAME({ media })}>
        {items.map((item, index) => (
          <li key={item.id}>
            <div
              className="relative"
              data-dropdown-id={item.navigationType}
              ref={(el) => (refs.current[index] = el)}
            >
              <ListItem
                title={item.title}
                hasChevron={item.hasChevron}
                {...(item.href
                  ? { href: item.href }
                  : { onClick: () => onClick(item.navigationType) })}
                size="medium"
              />
              <RichMenu
                isOpen={isRichMenuOpen(item.navigationType)}
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
};
