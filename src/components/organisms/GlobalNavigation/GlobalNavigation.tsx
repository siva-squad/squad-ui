import { Logo } from "../../../assets/logo";
import type { GlobalNavigationProps } from "./type";

const ListItemSlot = () => {
  return <a href="">テキスト</a>;
};

export const GlobalNavigation = ({
  items,
  onChangeSelectedId,
  selectedId,
}: GlobalNavigationProps) => {
  return (
    <header className="border-b border-gray-light bg-white px-4 py-2">
      <Logo />
      <nav>
        <ul>{items?.map((item) => <ListItemSlot key={item.id} />)}</ul>
      </nav>
    </header>
  );
};
