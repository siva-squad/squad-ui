import { useEffect, useMemo, useRef, useState } from "react";
import { useScreenSize } from "@hooks/useScreenSize";
import { MenuList } from "@molecules/MenuList";
import { RICH_MENU_CLASS_NAME } from "./const";
import { RichMenuProps } from "./type";

export const RichMenu = ({
  absolute = false,
  isOpen = false,
  navigationType,
  richMenuType,
  anchor = "left",
}: RichMenuProps) => {
  const { height: windowHeight } = useScreenSize();
  const internalRef = useRef<HTMLDivElement>(null);

  const [richMenuRect, setRichMenuRect] = useState({ y: 0, x: 0 });

  useEffect(() => {
    if (!internalRef.current) return;
    const rect = internalRef.current.getBoundingClientRect();
    setRichMenuRect(rect);
  }, [isOpen]);

  const richContentUI = useMemo(() => {
    if (richMenuType === "default") return <></>;

    // ここでrichContent切り替え
    return <div className="border-l border-gray-extraLight p-4">{richMenuType} エリア</div>;
  }, [richMenuType]);

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
