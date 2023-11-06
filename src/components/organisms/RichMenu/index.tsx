import { useCallback } from "react";
import { Button, ListItem } from "@components/atoms";
import { ChevronRightIcon, FolderIcon } from "@heroicons/react/24/outline";
import { useClientRect } from "@hooks/useClientRect";
import { useScreenSize } from "@hooks/useScreenSize";
import { MenuList } from "@molecules/MenuList";
import { RICH_MENU_CLASS_NAME } from "./const";
import { RichMenuProps } from "./type";

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
            <div className="flex flex-1 gap-x-4 rounded bg-gray-extraLight p-4">
              <article>
                <h3 className="text-xs font-medium leading-none">最近見た</h3>
                <div className="mt-4 flex flex-col gap-y-2">
                  <ListItem
                    key={1}
                    title="フォルダ名が入りますフォルダ名が入ります"
                    hasChevron={false}
                    onClick={() => {}}
                    icon={<FolderIcon />}
                    size="medium"
                  />
                  <ListItem
                    key={1}
                    title="フォルダ名が入りますフォルダ名が入ります"
                    hasChevron={false}
                    onClick={() => {}}
                    icon={<FolderIcon />}
                    size="medium"
                  />
                  <ListItem
                    key={1}
                    title="フォルダ名が入りますフォルダ名が入ります"
                    hasChevron={false}
                    onClick={() => {}}
                    icon={<FolderIcon />}
                    size="medium"
                  />
                </div>
              </article>
              <div className="h-full w-px bg-gray-light"></div>
              <article>
                <h3 className="text-xs font-medium leading-none">お気に入り</h3>
                <div className="mt-4 flex flex-col gap-y-2">
                  <ListItem
                    key={1}
                    title="フォルダ名が入りますフォルダ名が入ります"
                    hasChevron={false}
                    onClick={() => {}}
                    icon={<FolderIcon />}
                    size="medium"
                  />
                  <ListItem
                    key={1}
                    title="フォルダ名が入りますフォルダ名が入ります"
                    hasChevron={false}
                    onClick={() => {}}
                    icon={<FolderIcon />}
                    size="medium"
                  />
                  <ListItem
                    key={1}
                    title="フォルダ名が入りますフォルダ名が入ります"
                    hasChevron={false}
                    onClick={() => {}}
                    icon={<FolderIcon />}
                    size="medium"
                  />
                </div>
              </article>
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
