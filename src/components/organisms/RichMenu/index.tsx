import { useClientRect } from "@hooks/useClientRect";
import { useScreenSize } from "@hooks/useScreenSize";
import { MenuList } from "@molecules/MenuList";
import { RICH_MENU_CLASS_NAME } from "./const";
import { DESCRIPTIONS } from "./dict";
import { useRichMenuHover } from "./hook";
import { RichMenuContents } from "./RichMenuContents";
import { RichMenuProps } from "./type";

export const RichMenu = ({
  absolute = false,
  isOpen = false,
  navigationType,
  anchor = "left",
  groups,
}: RichMenuProps) => {
  const { height: windowHeight } = useScreenSize();
  const { rectState, clientRectRef } = useClientRect({ enabled: isOpen });
  const { hoveredMenuId, setHoveredMenuId } = useRichMenuHover({ containerRef: clientRectRef });

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
      <RichMenuContents
        menuId={hoveredMenuId}
        descriptionContent={descriptionContent}
        groups={groups}
      />
    </div>
  );
};
