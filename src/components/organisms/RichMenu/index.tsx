import { useClientRect } from "@hooks/useClientRect";
import { useScreenSize } from "@hooks/useScreenSize";
import { MenuList } from "@molecules/MenuList";
import { RICH_MENU_CLASS_NAME } from "./const";
import { RichMenuContents } from "./RichMenuContents";
import { RichMenuProps } from "./type";

export const RichMenu = ({
  absolute = false,
  isOpen = false,
  navigationType,
  anchor = "left",
  ...richMenuProps
}: RichMenuProps) => {
  const { height: windowHeight } = useScreenSize();
  const { rectState, clientRectRef } = useClientRect({ enabled: isOpen });

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
      <RichMenuContents {...richMenuProps} />
    </div>
  );
};
