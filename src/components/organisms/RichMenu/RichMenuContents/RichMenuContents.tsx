import { Button } from "@components/atoms";
import { ListItemProps } from "@components/atoms/ListItem/type";
import { RichMenuList } from "@components/molecules/RichMenulist";
import {
  ArrowTopRightOnSquareIcon,
  ChevronRightIcon,
  FolderIcon,
} from "@heroicons/react/24/outline";

import { StarIcon } from "@heroicons/react/24/solid";
import type { RichMenuContentsProps } from "./type";

const ITEMS: ListItemProps[] = [...Array(15).keys()].map((_, index) => ({
  icon: <FolderIcon />,
  // TODO: ListItemのtruncate対応
  title: "フォルダ名" + index,
  onClick: () => {},
  hasChevron: false,
  size: "medium",
}));

const RichMenuDescriptionContent = () => {
  return (
    <div className="m-4 flex w-[544px] flex-col px-6 py-4">
      <div className="flex flex-col items-center gap-y-4">
        <h2 className="text-lg font-bold leading-tight">
          一括タグで時間を節約一括タグで時間を節約
        </h2>
        <p className="text-xs leading-normal">
          チーム、グループ、フォルダなどに一括でタグを設置することで簡単に管理ができます！
          <br />
          チーム、グループ、フォルダなどに一括でタグを設置することで簡単に管理ができます！タグを設置することで簡単に管理ができます！タグを設置することで簡単に管理ができます！
        </p>
      </div>
      <div className="mt-6 flex-1">
        <img
          src="https://placehold.jp/1080x1090.png"
          className="rounded-lg object-scale-down"
        />
      </div>
      <div className="mt-4 w-fit self-center">
        <Button
          theme="no-background"
          size="small"
          iconPosition="right"
          icon={<ArrowTopRightOnSquareIcon />}
        >
          利用方法(FAQ)
        </Button>
      </div>
    </div>
  );
};

const RichMenuListContent = () => {
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

export const RichMenuContents = ({ richMenuType }: RichMenuContentsProps) => {
  if (richMenuType === "description") return <RichMenuDescriptionContent />;

  if (richMenuType === "list") return <RichMenuListContent />;

  return <></>;
};
