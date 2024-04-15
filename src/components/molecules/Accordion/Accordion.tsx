import { useRef, useState } from "react";
import { ChevronRightIcon } from "@heroicons/react/24/solid";
import {
  ACCORDION_ARROW_VARIANTS,
  ACCORDION_CONTAINER_VARIANTS,
  ACCORDION_CONTENT_VARIANTS,
  ACCORDION_CONTENT_CONTAINER_VARIANTS,
  ACCORDION_TRIGGER_VARIANTS,
} from "./const";
import { AccordionProps } from "./type";

export const Accordion = ({ label, disabled, children }: AccordionProps) => {
  const [isOpen, setOpen] = useState(false);
  const accordionId = `accordion-panel-${label}`;
  const contentRef = useRef<HTMLDivElement>(null);
  const handleClick = () => setOpen(!isOpen);

  return (
    <div className={ACCORDION_CONTAINER_VARIANTS({ open: isOpen })}>
      <button
        className={ACCORDION_TRIGGER_VARIANTS({ disabled })}
        aria-expanded={isOpen}
        aria-controls={accordionId}
        type={"button"}
        disabled={disabled}
        onClick={handleClick}
      >
        <ChevronRightIcon className={ACCORDION_ARROW_VARIANTS({ open: isOpen })} />
        {label}
      </button>
      <div
        className={ACCORDION_CONTENT_CONTAINER_VARIANTS({})}
        style={{
          height: isOpen ? contentRef.current?.offsetHeight ?? "auto" : 0,
        }}
        id={accordionId}
      >
        <div
          className={ACCORDION_CONTENT_VARIANTS({ open: isOpen })}
          ref={contentRef}
        >
          {children}
        </div>
      </div>
    </div>
  );
};
