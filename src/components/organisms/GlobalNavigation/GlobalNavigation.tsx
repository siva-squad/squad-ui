import { Logo } from "../../../assets/logo";
import { GlobalAccount } from "../GlobalAccount";
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
      <GlobalAccount
        userId="1"
        userName="田中 太郎"
        teamName="Squad beyondチーム"
      />
    </header>
  );
};
