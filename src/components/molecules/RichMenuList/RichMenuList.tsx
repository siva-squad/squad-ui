import { Button, ListItem } from "@components/atoms";
import { ChevronRightIcon } from "@heroicons/react/24/outline";
import type { RichMenuListProps } from "./type";

export const RichMenuList = ({ groups, onViewAllFolders }: RichMenuListProps) => {
  return (
    <div className="my-4 flex max-h-[400px] w-fit flex-col gap-y-2 border-l border-gray-extraLight px-4">
      <div className="flex flex-1 gap-x-4 overflow-hidden rounded bg-gray-extraLight p-4">
        {groups?.map((group, index, passed) => (
          <>
            <article
              className="flex w-[240px] flex-col"
              key={group.id}
            >
              <div className="flex items-center gap-x-1">
                {group.titleIcon}
                <span className="text-xs font-medium leading-none">{group.title}</span>
              </div>
              <ul className="mt-4 flex flex-col gap-y-2 overflow-y-auto overflow-x-hidden pb-4">
                {group.items.map((item) => (
                  <li key={item.id}>
                    <ListItem {...item} />
                  </li>
                ))}
              </ul>
              {group?.bottomButton && <div className="self-start">{group.bottomButton}</div>}
            </article>
            {index < passed.length - 1 && <div className="h-full w-px bg-gray-light"></div>}
          </>
        ))}
      </div>
      <div className="w-fit self-center">
        <Button
          theme="no-background"
          size="small"
          iconPosition="right"
          icon={<ChevronRightIcon />}
          onClick={onViewAllFolders}
        >
          すべてのフォルダを見る
        </Button>
      </div>
    </div>
  );
};
