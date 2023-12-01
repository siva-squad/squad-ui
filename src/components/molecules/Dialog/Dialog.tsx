import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import FocusLock from "react-focus-lock";
import { RemoveScroll } from "react-remove-scroll";

import { Button } from "@components/atoms";
import type { DialogProps } from "./type";

export const Dialog = ({
  children,
  title,
  onClose,
  cancelButtonText,
  saveButtonText,
  isOpen,
}: DialogProps) => {
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
            className="overflow-hidden rounded-lg"
            role="dialog"
            aria-modal="true"
            aria-label={title}
          >
            <div className="relative grid max-h-full w-[37.5rem] gap-4 overflow-y-auto  bg-white shadow-04">
              <div className="p-10">{children}</div>
              <div className="flex items-center justify-end gap-2 border-t border-t-gray-light px-10 py-4">
                <Button
                  theme="white"
                  size="medium"
                  onClick={onClose}
                >
                  {cancelButtonText}
                </Button>
                <Button
                  theme="primary"
                  size="medium"
                >
                  {saveButtonText}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </RemoveScroll>
    </FocusLock>,
    ref.current,
  );
};
