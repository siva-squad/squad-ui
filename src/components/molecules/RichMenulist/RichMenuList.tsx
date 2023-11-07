import { ListItem } from "@components/atoms";
import { RichMenuListProps } from "./type";

export const RichMenuList = ({ items, title, titleIcon }: RichMenuListProps) => {
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
