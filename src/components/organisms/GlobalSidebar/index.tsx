import { BrandLogo } from "@components/molecules/BrandLogo";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { NavigationListUI } from "../GlobalNavigation/components/NavigationListUI";
import { GlobalNavigationProps } from "../GlobalNavigation/type";

type GlobalSidebarProps = {
  items: GlobalNavigationProps["items"];
  onClose?: () => void;
  isOpen: boolean;
};
export const GlobalSidebar = ({ items, onClose, isOpen }: GlobalSidebarProps) => {
  if (!isOpen) return <></>;

  return (
    <aside className="absolute left-0 top-0 flex h-full w-60 flex-col border-r border-gray-light bg-white px-4 py-2">
      <div className="flex items-center justify-between">
        <BrandLogo />
        <button onClick={onClose}>
          <XMarkIcon
            height={24}
            width={24}
          />
        </button>
      </div>
      <NavigationListUI
        items={items}
        mediaType="mobile"
      />
    </aside>
  );
};
