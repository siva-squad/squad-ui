import { ReactElement, useCallback } from "react";
import { Button, ListItem } from "@components/atoms";
import { ListItemProps } from "@components/atoms/ListItem/type";
import { ChevronRightIcon, FolderIcon } from "@heroicons/react/24/outline";
import { StarIcon } from "@heroicons/react/24/solid";
import { useClientRect } from "@hooks/useClientRect";
import { useScreenSize } from "@hooks/useScreenSize";
import { MenuList } from "@molecules/MenuList";
import { RICH_MENU_CLASS_NAME } from "./const";
import { RichMenuProps } from "./type";

// TODO: 別ファイル分割
type RichMenuListProps = {
  title: string;
  titleIcon?: ReactElement;
  items: ListItemProps[];
};
const RichMenuList = ({ items, title, titleIcon }: RichMenuListProps) => {
  return (
    <article className="w-[240px]">
      <div className="flex items-center gap-x-1">
        {titleIcon && <span>{titleIcon}</span>}
        <span className="text-xs font-medium leading-none">{title}</span>
      </div>
      <div className="mt-4 flex h-full flex-col gap-y-2 overflow-auto pb-8">
        {items.map((item) => (
          <ListItem
            {...item}
            key={item.id}
          />
        ))}
      </div>
    </article>
  );
};

const ITEMS: ListItemProps[] = [...Array(15).keys()].map((_, index) => ({
  icon: <FolderIcon />,
  // TODO: ListItemのtruncate対応
  title: "フォルダ名が入りますフォルダ名が入ります" + index,
  onClick: () => {},
  hasChevron: false,
  size: "medium",
}));

export const RichMenu = ({
  absolute = false,
  isOpen = false,
  navigationType,
  richMenuType,
  anchor = "left",
}: RichMenuProps) => {
  const { height: windowHeight } = useScreenSize();
  const { rectState, clientRectRef } = useClientRect({ enabled: isOpen });

  const RichContentUI = useCallback(() => {
    switch (richMenuType) {
      case "description":
        return <>desc</>;
      case "list":
        return (
          <div className="flex flex-col gap-y-2 border-l border-gray-extraLight p-4">
            <div className="flex flex-1 gap-x-4 overflow-hidden rounded bg-gray-extraLight p-4">
              <RichMenuList
                items={ITEMS}
                title="最近見た"
              />
              <div className="h-full w-px bg-gray-light"></div>
              <RichMenuList
                items={ITEMS}
                title="お気に入り"
                titleIcon={
                  <StarIcon
                    className="text-yellow"
                    width={12}
                    height={12}
                  />
                }
              />
            </div>
            <div className="w-fit self-center">
              <Button
                theme="no-background"
                size="small"
                iconPosition="right"
                icon={<ChevronRightIcon />}
              >
                すべてのフォルダを見る
              </Button>
            </div>
          </div>
        );
      case "default":
      default:
        return <></>;
    }
  }, [richMenuType]);

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
      <RichContentUI />
    </div>
  );
};
