import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { Logo } from "../../../assets/logo";
import { Avatar } from "../../atoms";
import type { GlobalNavigationProps } from "./type";

const ListItemSlot = () => {
  return (
    <a
      href=""
      className="p-2"
    >
      テキスト
    </a>
  );
};

export const GlobalNavigation = ({ items }: GlobalNavigationProps) => {
  return (
    <header className="flex items-center gap-x-6 border-b border-gray-light bg-white px-4 py-2">
      <Logo
        height={40}
        width={40}
      />
      <nav className="mr-auto">
        <ul className="flex items-center gap-x-2">
          {items?.map((item) => (
            <li key={item.id}>
              <ListItemSlot />
            </li>
          ))}
        </ul>
      </nav>
      <div className="flex w-fit items-center gap-x-2">
        <Avatar />
        <div className="flex flex-col gap-y-1">
          <span className="text-xs leading-none text-gray-dark">田中 太郎</span>
          <span className="text-s leading-none text-black">Squad beyondチーム</span>
        </div>
        <ChevronDownIcon
          height={16}
          width={16}
          strokeWidth={2}
        />
      </div>
    </header>
  );
};
