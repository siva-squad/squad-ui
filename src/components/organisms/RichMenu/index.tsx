import { useCallback, useEffect, useState } from "react";
import { MenuKindKey } from "@components/molecules/MenuList/const";
import { RichMenuDescription } from "@components/molecules/RichMenuDescription";
import { RichMenuList } from "@components/molecules/RichMenuList";
import { useClientRect } from "@hooks/useClientRect";
import { useScreenSize } from "@hooks/useScreenSize";
import { MenuList } from "@molecules/MenuList";
import { RICH_MENU_CLASS_NAME } from "./const";
import { DESCRIPTIONS } from "./dict";
import { RichMenuProps } from "./type";

// TODO:
// lisItemのアイコン・desc見切れ調整

export const RichMenu = ({
  absolute = false,
  isOpen = false,
  navigationType,
  anchor = "left",
  groups,
}: RichMenuProps) => {
  const { height: windowHeight } = useScreenSize();
  const { rectState, clientRectRef } = useClientRect({ enabled: isOpen });

  const [hoveredMenuId, setHoveredMenuId] = useState<MenuKindKey>("default");

  // TODO: hooks化
  const handleClickOutside = useCallback(
    (e: MouseEvent) => {
      const isChild = clientRectRef.current?.contains(e.target as Node);

      if (isChild) return;

      setHoveredMenuId("default");
    },
    [clientRectRef],
  );

  // 外クリックでrichMenuを閉じる
  useEffect(() => {
    document.addEventListener("mousemove", handleClickOutside);

    return () => document.removeEventListener("mousemove", handleClickOutside);
  }, [handleClickOutside]);

  const descriptionContent = DESCRIPTIONS.find((desc) => desc.id === hoveredMenuId);

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
      <MenuList
        navigationType={navigationType}
        onMouseEnter={(id) => setHoveredMenuId(id)}
      />
      {hoveredMenuId !== "default" ? (
        hoveredMenuId === "folder" ? (
          <RichMenuList
            groups={groups}
            onClickButton={() => {}}
          />
        ) : (
          <RichMenuDescription
            imgSrc={descriptionContent?.imgSrc || ""}
            headingText={descriptionContent?.headingText || ""}
            description={descriptionContent?.description || ""}
          />
        )
      ) : (
        <></>
      )}
    </div>
  );
};
