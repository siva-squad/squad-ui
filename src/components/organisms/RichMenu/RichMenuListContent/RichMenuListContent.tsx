import { Button } from "@components/atoms";
import { ListItemProps } from "@components/atoms/ListItem/type";
import { RichMenuList } from "@components/molecules/RichMenulist";
import { ChevronRightIcon, FolderIcon } from "@heroicons/react/24/outline";
import { StarIcon } from "@heroicons/react/24/solid";

const ITEMS: ListItemProps[] = [...Array(15).keys()].map((_, index) => ({
  icon: <FolderIcon />,
  // TODO: ListItemのtruncate対応
  title: "フォルダ名" + index,
  onClick: () => {},
  hasChevron: false,
  size: "medium",
}));

export const RichMenuListContent = () => {
  return (
    <div className="my-4 flex flex-col gap-y-2 border-l border-gray-extraLight px-4">
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
};
