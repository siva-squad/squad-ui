import { useCallback } from "react";
import { useClientRect } from "@hooks/useClientRect";
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
  const { rectState, clientRectRef } = useClientRect({ enabled: isOpen });

  const RichContentUI = useCallback(() => {
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
          ${rectState.y}px -
          1rem)`,
      }}
      ref={clientRectRef}
    >
      <MenuList navigationType={navigationType} />
      <RichContentUI />
    </div>
  );
};
