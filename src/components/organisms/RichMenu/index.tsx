import { useEffect, useMemo, useRef, useState } from "react";
import { MenuList } from "@molecules/MenuList";
import { MenuListProps } from "@molecules/MenuList/type";
import { RICH_MENU_CLASS_NAME } from "./const";
import { useScreenSize } from "@/src/hooks/useScreenSize";

export const RichMenu = ({
  absolute = false,
  isOpen = false,
  navigationType,
  type,
  anchor = "left",
}: MenuListProps) => {
  const { height: windowHeight } = useScreenSize();
  const internalRef = useRef<HTMLDivElement>(null);
  const [richMenuRect, setRichMenuRect] = useState({ y: 0, x: 0 });

  useEffect(() => {
    if (!internalRef.current) return;
    const rect = internalRef.current.getBoundingClientRect();
    setRichMenuRect({ x: rect.x, y: rect.y });
  }, [isOpen]);

  const richContentUI = useMemo(() => {
    if (type === "default") return <></>;

    // ここでrichContent切り替え
    return <div className="border-l border-gray-extraLight p-4">{type} エリア</div>;
  }, [type]);

  if (!isOpen) return <></>;

  return (
    <div
      className={RICH_MENU_CLASS_NAME({ anchor, absolute })}
      style={{
        maxHeight: `calc(
          ${windowHeight}px - 
          ${richMenuRect.y}px -
          1rem)`,
      }}
      ref={internalRef}
    >
      <MenuList navigationType={navigationType} />
      {richContentUI}
    </div>
  );
};
