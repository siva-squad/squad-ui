import { useRef, useEffect } from "react";

export const useSidebar = ({ onClose }: { onClose: () => void }) => {
  const sidebarRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    document.addEventListener("click", (e) => {
      const isChild = sidebarRef.current?.contains(e.target as Node);
      const isTrigger = triggerRef.current?.contains(e.target as Node);

      if (!isChild && !isTrigger) {
        onClose();
      }
    });
  }, [onClose]);

  return { sidebarRef, triggerRef };
};
