import { RefObject, useCallback, useEffect, useState } from "react";
import { MenuKindKey } from "@components/molecules/MenuList/const";

export const useRichMenuHover = ({ containerRef }: { containerRef: RefObject<HTMLElement> }) => {
  const [hoveredMenuId, setHoveredMenuId] = useState<MenuKindKey>("default");

  const handleHoverOutside = useCallback(
    (e: MouseEvent) => {
      const isChild = containerRef.current?.contains(e.target as Node);

      if (isChild) return;

      setHoveredMenuId("default");
    },
    [containerRef],
  );

  useEffect(() => {
    document.addEventListener("mousemove", handleHoverOutside);

    return () => document.removeEventListener("mousemove", handleHoverOutside);
  }, [handleHoverOutside]);

  return { hoveredMenuId, setHoveredMenuId };
};
