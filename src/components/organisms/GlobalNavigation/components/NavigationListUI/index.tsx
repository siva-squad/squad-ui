import { ListItem } from "@components/atoms";
import { RichMenu } from "@components/organisms/RichMenu";
import { useScreenSize } from "@hooks/useScreenSize";
import { useRichMenuDialog } from "../../hooks";
import { GlobalNavigationProps } from "../../type";
import { NAVIGATION_LIST_CLASS_NAME } from "./const";

type NavigationListUIProps = {
  items: GlobalNavigationProps["items"];
  mediaType?: "desktop" | "mobile";
};
export const NavigationListUI = ({ items, mediaType = "desktop" }: NavigationListUIProps) => {
  const { media } = useScreenSize();
  const { richMenuState, noCloseRefs, toggleDialog } = useRichMenuDialog();

  return (
    <nav>
      <ul className={NAVIGATION_LIST_CLASS_NAME({ media: mediaType || media })}>
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
                absolute
              />
            </div>
          </li>
        ))}
      </ul>
    </nav>
  );
};
