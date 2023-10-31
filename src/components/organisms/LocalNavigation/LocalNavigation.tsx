import { LocalMenuItem } from "../../molecules/LocalMenuItem";
import type { LocalNavigationProps } from "./type";

export const LocalNavigation = ({ items, selectedId }: LocalNavigationProps) => {
  return (
    <nav className="h-full w-fit border-r border-gray-light bg-white px-2 py-4">
      <ul className="flex flex-col gap-2">
        {items.map((item) => (
          <li key={item.id}>
            <LocalMenuItem
              {...item}
              isSelected={item.id === selectedId}
            />
          </li>
        ))}
      </ul>
    </nav>
  );
};
