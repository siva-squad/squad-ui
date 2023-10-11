import { useEffect, useRef, useState } from "react";
import { clsx } from "clsx";

import { SHAPE_DIRECTION_STYLE } from "./consts";
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

  useEffect(() => {
    const name = anchorRef?.current?.children?.[0]?.localName || undefined;

    const nativeFocusableElements = ["button", "a", "input", "select"];
    // array and includes

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

  return (
    <>
      {isOpen && (
        <span
          role="tooltip"
          id={ariaLabelledBy}
          aria-hidden={!isOpen}
          ref={tooltipRef}
          className="absolute z-40 inline-block w-40 rounded bg-white text-sm leading-normal shadow-04"
          style={tooltipPositionStyles}
        >
          <span className="relative inline-flex h-full w-full items-center justify-center p-2">
            {tooltipText}
            <Shape
              className={clsx("absolute m-auto", SHAPE_DIRECTION_STYLE[positionToAnchor])}
              style={shapePositionStyles}
            />
          </span>
        </span>
      )}
      <span
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

// Useage: <Tooltip message="Tooltip text">Some children</Tooltip>
// Hover on text/children: Tooltip opens
// Calculate positioning of Tooltip based on space available

// open on "tab" key
// https://github.com/siva-squad/squadbeyond/pull/new/feature/new-design-tooltip
// TESTING!!!
