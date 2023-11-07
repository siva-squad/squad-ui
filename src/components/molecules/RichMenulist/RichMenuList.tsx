import { ListItem } from "@components/atoms";
import { RichMenuListProps } from "./type";

export const RichMenuList = ({ items, title, titleIcon, bottomButton }: RichMenuListProps) => {
  return (
    <article className="flex w-[240px] flex-col">
      <div className="flex items-center gap-x-1">
        {titleIcon && <span>{titleIcon}</span>}
        <span className="text-xs font-medium leading-none">{title}</span>
      </div>
      <div className="mt-4 flex flex-col gap-y-2 overflow-auto pb-4">
        {items.map((item) => (
          <ListItem
            {...item}
            key={item.id}
          />
        ))}
      </div>
      <div className="self-start">{bottomButton}</div>
    </article>
  );
};
