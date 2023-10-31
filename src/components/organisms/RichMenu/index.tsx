import { useMemo } from "react";
import { MenuList } from "@molecules/MenuList";
import { MenuListProps } from "@molecules/MenuList/type";
import clsx from "clsx";

export const RichMenu = ({
  absolute = false,
  isOpen = false,
  navigationType,
  type,
}: MenuListProps) => {
  const richContentUI = useMemo(() => {
    if (type === "default") return <></>;

    // ここでrichContent切り替え
    return <div className="border-l border-gray-extraLight p-4">{type} エリア</div>;
  }, [type]);

  if (!isOpen) return <></>;

  return (
    <div
      className={clsx("flex w-fit gap-x-4 rounded-lg bg-white p-4 shadow-06", {
        "absolute mt-3": absolute,
      })}
    >
      <MenuList type={navigationType} />
      {richContentUI}
    </div>
  );
};
