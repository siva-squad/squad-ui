import clsx from "clsx";
import { MenuListSlot } from "../_MenuList";

type MenuListType = "beyond" | "connection" | "account";
type MenuListSlotProps = {
  type: MenuListType;
  isOpen: boolean;
  onOpenChange?: () => void;
  absolute?: boolean;
};

export const RichMenu = ({ absolute = false, isOpen = false, type }: MenuListSlotProps) => {
  if (!isOpen) return <></>;

  return (
    <div
      className={clsx("flex w-fit gap-x-4 rounded-lg bg-white p-4 shadow-06", {
        "absolute mt-3": absolute,
      })}
    >
      <MenuListSlot type={type} />
      {/* RichMenuList */}
    </div>
  );
};
