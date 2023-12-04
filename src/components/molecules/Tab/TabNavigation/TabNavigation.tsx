import { useTab } from "../hook";
import { TAB_NAVIGATION_BUTTON_CLASS_NAME, TAB_NAVIGATION_CLASS_NAME } from "./const";
import { TabNavigationProps } from "./type";

export const TabNavigation = ({
  tabs,
  backgroundColor,
  activeBorderColor = "black",
  passiveBorderColor = "gray",
  activeTextColor = "black",
  passiveTextColor = "gray",
}: TabNavigationProps) => {
  const { setCurrentPage, currentPage } = useTab();

  return (
    <div
      className={TAB_NAVIGATION_CLASS_NAME({
        backgroundColor,
        passiveBorderColor,
      })}
    >
      {tabs.map(({ pageId, label }) => (
        <button
          className={TAB_NAVIGATION_BUTTON_CLASS_NAME({
            isActive: pageId === currentPage,
            activeBorderColor,
            activeTextColor,
            passiveTextColor,
          })}
          onClick={() => setCurrentPage(pageId)}
          key={pageId}
          data-testid={`navigation-button__${pageId}`}
        >
          {label}
        </button>
      ))}
    </div>
  );
};
