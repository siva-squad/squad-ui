import { useLayoutEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { clsx } from "clsx";

import { Shape } from "./Shape";
import type { TooltipProps } from "./type";
import { useTooltipPositionStyles } from "./useTooltipPositionStyles";

export const Tooltip = ({
  positionToAnchor,
  alignment,
  tooltipText,
  ariaLabelledBy,
  children,
}: TooltipProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [tabIndex, setTabIndex] = useState(0);

  const tooltipRef = useRef<HTMLSpanElement>(null);
  const anchorRef = useRef<HTMLSpanElement>(null);
  const { tooltipPositionStyles, shapePositionStyles } = useTooltipPositionStyles({
    tooltipRef,
    anchorRef,
    positionToAnchor,
    alignment,
    isOpen,
  });

  useLayoutEffect(() => {
    const name = anchorRef?.current?.children?.[0]?.localName || undefined;

    const nativeFocusableElements = ["button", "a", "input", "select", "summary"];

    if (name && nativeFocusableElements.includes(name)) {
      setTabIndex(-1);
    } else {
      setTabIndex(0);
    }
  }, []);

  const openTooltip = () => {
    setIsOpen(true);
  };

  const closeTooltip = () => {
    setIsOpen(false);
  };

  const bodyElement = document.querySelector("body");

  return (
    <>
      {bodyElement &&
        isOpen &&
        createPortal(
          <span
            role="tooltip"
            id={ariaLabelledBy}
            aria-hidden={!isOpen}
            ref={tooltipRef}
            className="absolute z-40 inline-block w-40 rounded bg-white text-sm leading-normal drop-shadow-md"
            style={tooltipPositionStyles}
          >
            <span className="relative inline-flex h-full w-full items-center justify-center p-2">
              {tooltipText}
              <Shape
                className={clsx("absolute m-auto", shapePositionStyles.shapeClasses)}
                style={shapePositionStyles.shapePosition}
              />
            </span>
          </span>,
          bodyElement,
        )}
      <span
        data-testid="tooltip-anchor"
        aria-labelledby={ariaLabelledBy}
        tabIndex={tabIndex}
        onFocus={openTooltip}
        onBlur={closeTooltip}
        onMouseEnter={openTooltip}
        onMouseLeave={closeTooltip}
        className="inline-block max-w-full"
        ref={anchorRef}
      >
        {children}
      </span>
    </>
  );
};
