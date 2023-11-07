import { Button } from "@components/atoms";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";

export const RichMenuDescriptionContent = () => {
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
