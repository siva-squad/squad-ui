import { createPortal } from "react-dom";
import FocusLock from "react-focus-lock";
import { RemoveScroll } from "react-remove-scroll";

import { Button } from "@components/atoms";
import type { BaseModalProps } from "./type";

export const BaseModal = ({
  children,
  title,
  onClose,
  cancelButtonText,
  saveButtonText,
  isOpen,
}: BaseModalProps) => {
  if (!isOpen) {
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
            data-testid="modal-background"
            className="absolute inset-0 bg-black opacity-60"
            onClick={onClose}
          />
          <div
            className="relative grid w-[37.5rem] gap-4 overflow-y-auto rounded-lg bg-white shadow-04"
            role="dialog"
            aria-modal="true"
            aria-label={title}
          >
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
      </RemoveScroll>
    </FocusLock>,
    document.body,
  );
};
