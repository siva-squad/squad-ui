import { Button } from "@components/atoms";
import { RichMenuList } from "@components/molecules/RichMenuList";
import { ChevronRightIcon, FolderIcon } from "@heroicons/react/24/outline";
import { StarIcon } from "@heroicons/react/24/solid";
import { useClientRect } from "@hooks/useClientRect";
import { useScreenSize } from "@hooks/useScreenSize";
import { MenuList } from "@molecules/MenuList";
import { RICH_MENU_CLASS_NAME } from "./const";
import { RichMenuProps } from "./type";

const commonItems = {
  icon: <FolderIcon />,
  title: "フォルダ名フォルダ名フォルダ名フォルダ名",
  size: "medium",
  hasChevron: false,
  onClick: () => {},
} as const;

export const RichMenu = ({
  absolute = false,
  isOpen = false,
  navigationType,
  anchor = "left",
}: RichMenuProps) => {
  const { height: windowHeight } = useScreenSize();
  const { rectState, clientRectRef } = useClientRect({ enabled: isOpen });

  if (!isOpen) return <></>;

  return (
    <div
      className={RICH_MENU_CLASS_NAME({ anchor, absolute })}
      style={{
        maxHeight: `calc(
          ${windowHeight}px - 
          ${rectState.y}px -
          1rem)`,
      }}
      ref={clientRectRef}
    >
      <MenuList navigationType={navigationType} />
      {/* TODO: ここでRichMenuListとDescription切り替え */}
      <RichMenuList
        groups={[
          {
            id: "1",
            title: "最近見た",
            items: [...Array(10)].map(() => commonItems),
          },
          {
            id: "2",
            title: "お気に入り",
            titleIcon: (
              <StarIcon
                height={12}
                width={12}
                className="text-yellow"
              />
            ),
            items: [...Array(10)].map(() => commonItems),
            bottomButton: (
              <Button
                theme="no-background"
                size="small"
                iconPosition="right"
                icon={<ChevronRightIcon />}
              >
                すべてのお気に入りを見る
              </Button>
            ),
          },
        ]}
        onClickButton={() => {}}
      />
    </div>
  );
};
