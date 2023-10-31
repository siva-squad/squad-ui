import { useMemo } from "react";
import { ListItem } from "@atoms/ListItem";
import { MenuListSlot } from "@molecules/MenuList";
import { MenuListType } from "@molecules/MenuList/type";
import clsx from "clsx";
import { RichMenuType } from "../GlobalNavigation/type";

type MenuListSlotProps = {
  navigationType: MenuListType;
  type: RichMenuType;
  isOpen: boolean;
  onOpenChange?: () => void;
  absolute?: boolean;
};

export const RichMenu = ({
  absolute = false,
  isOpen = false,
  navigationType,
  type,
}: MenuListSlotProps) => {
  const richContentUI = useMemo(() => {
    if (type === "default") return <></>;

    // ここでrichContent切り替え
    return (
      <ListItem
        title={type}
        size="large"
        href=""
      />
    );
  }, [type]);

  if (!isOpen) return <></>;

  return (
    <div
      className={clsx("flex w-fit gap-x-4 rounded-lg bg-white p-4 shadow-06", {
        "absolute mt-3": absolute,
      })}
    >
      <MenuListSlot type={navigationType} />
      {richContentUI}
    </div>
  );
};
