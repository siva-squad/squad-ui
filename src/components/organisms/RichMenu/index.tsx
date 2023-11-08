import { useMemo } from "react";
import { RichMenuDescription } from "@components/molecules/RichMenuDescription";
import { RichMenuList } from "@components/molecules/RichMenuList";
import { useClientRect } from "@hooks/useClientRect";
import { useScreenSize } from "@hooks/useScreenSize";
import { MenuList } from "@molecules/MenuList";
import { RICH_MENU_CLASS_NAME } from "./const";
import { DESCRIPTIONS } from "./dict";
import { useRichMenuHover } from "./hook";
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

  const richMenuUI = useMemo(() => {
    if (hoveredMenuId === "default") return <></>;

    if (hoveredMenuId === "folder" && groups?.length)
      return (
        <RichMenuList
          groups={groups}
          onClickButton={() => {}}
        />
      );

    if (hoveredMenuId !== "folder" && !!descriptionContent)
      return (
        <RichMenuDescription
          faqLink={descriptionContent.faqLink}
          imgSrc={descriptionContent?.imgSrc || ""}
          headingText={descriptionContent?.headingText || ""}
          description={descriptionContent?.description || ""}
        />
      );
  }, [descriptionContent, groups, hoveredMenuId]);

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
      {richMenuUI}
    </div>
  );
};
