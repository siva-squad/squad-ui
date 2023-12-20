import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import FocusLock from "react-focus-lock";
import { RemoveScroll } from "react-remove-scroll";

import type { DialogProps } from "./type";

export const Dialog = ({ children, title, isOpen, onClose }: DialogProps) => {
  const ref = useRef<HTMLBodyElement | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    ref.current = document.querySelector("body");
    setMounted(true);
  }, []);

  if (!isOpen || !mounted || !ref.current) {
    return;
  }

  return createPortal(
    <FocusLock
      returnFocus={true}
      autoFocus={false}
    >
      <RemoveScroll>
        <div className="fixed inset-0 grid place-content-center	p-4">
          <div
            data-testid="dialog-background"
            className="absolute inset-0 bg-black opacity-60"
            onClick={onClose}
          />
          <div
            className="overflow-hidden rounded-2xl"
            role="dialog"
            aria-modal="true"
            aria-label={title}
          >
            <div className="relative grid max-h-full w-[37.5rem] overflow-y-auto bg-white shadow-04">
              <div>{children}</div>
            </div>
          </div>
        </div>
      </RemoveScroll>
    </FocusLock>,
    ref.current,
  );
};
