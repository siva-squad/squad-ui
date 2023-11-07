import { Button } from "@components/atoms";
import { RichMenuList } from "@components/molecules/RichMenulist";
import { ChevronRightIcon } from "@heroicons/react/24/outline";
import { RichMenuListContentProps } from "./type";

export const RichMenuListContent = ({ listGroup }: RichMenuListContentProps) => {
  return (
    <div className="my-4 flex flex-col gap-y-2 border-l border-gray-extraLight px-4">
      <div className="flex flex-1 gap-x-4 overflow-hidden rounded bg-gray-extraLight p-4">
        {listGroup.map((list, index, passedArray) => (
          <>
            <RichMenuList
              {...list}
              key={list.title}
            />
            {index < passedArray.length - 1 && <div className="h-full w-px bg-gray-light"></div>}
          </>
        ))}
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
