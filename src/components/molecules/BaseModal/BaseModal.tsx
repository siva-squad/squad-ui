import { createPortal } from "react-dom";
import FocusLock from "react-focus-lock";
import { RemoveScroll } from "react-remove-scroll";

import type { BaseModalProps } from "./type";

export const BaseModal = ({ children, title, onCloseModal }: BaseModalProps) => {
  return createPortal(
    <FocusLock returnFocus={true}>
      <RemoveScroll>
        <div className="fixed inset-0 grid place-content-center	p-4">
          <div
            data-testid="modal-background"
            className="absolute inset-0 bg-black opacity-75"
            onClick={onCloseModal}
          />
          <div
            className="relative min-w-[340px] max-w-[600px] rounded-lg bg-white p-8 shadow-04 grid gap-4"
            role="dialog"
            aria-modal="true"
            aria-label={title}
          >
            <h2>{title}</h2>
            {children}
          </div>
        </div>
      </RemoveScroll>
    </FocusLock>,
    document.body,
  );
};
